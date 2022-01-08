<?php
/**
 * @copyright Copyright (c) 2017 Thomas Citharel <nextcloud@tcit.fr>
 *
 * @author Thomas Citharel <nextcloud@tcit.fr>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\DropAccount\Controller;

use DateTime;
use Exception;
use OCA\DropAccount\AppInfo\Application;
use OCA\DropAccount\BackgroundJob\DeleteAccountData;
use OCA\DropAccount\MissingEmailException;
use OCA\DropAccount\Service\ConfirmationService;
use OCA\DropAccount\Service\MailerService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\BackgroundJob\IJobList;
use OCP\IConfig;
use OCP\IL10N;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUser;
use OCP\IUserSession;
use OCP\PreConditionNotMetException;
use Psr\Log\LoggerInterface;

class AccountController extends Controller {

	/** @var IUserSession */
	private $userSession;

	/** @var LoggerInterface */
	private $logger;

	/** @var IJobList */
	private $jobList;

	/** @var IConfig */
	private $config;

	/** @var ConfirmationService */
	private $confirmationService;
	/**
	 * @var IL10N
	 */
	private $l10n;
	/**
	 * @var MailerService
	 */
	private $mailerService;
	/**
	 * @var IURLGenerator
	 */
	private $urlGenerator;

	public function __construct(string $appName,
								IRequest $request,
								IUserSession $userSession,
								LoggerInterface $logger,
								IConfig $config,
								IL10N $l10n,
								IJobList $jobList,
								ConfirmationService $confirmationService,
	IURLGenerator $urlGenerator,
	MailerService $mailerService
	) {
		parent::__construct($appName, $request);
		$this->userSession = $userSession;
		$this->logger = $logger;
		$this->config = $config;
		$this->l10n = $l10n;
		$this->jobList = $jobList;
		$this->confirmationService = $confirmationService;
		$this->urlGenerator = $urlGenerator;
		$this->mailerService = $mailerService;
	}

	/**
	 * @NoAdminRequired
	 * @PasswordConfirmationRequired
	 *
	 * @return JSONResponse
	 * @throws PreConditionNotMetException|MissingEmailException
	 */
	public function delete(): JSONResponse {
		$user = $this->userSession->getUser();

		if (!$user) {
			return new JSONResponse(['message' => $this->l10n->t('User-Session unexpectedly expired')], Http::STATUS_UNAUTHORIZED);
		}

		if ($this->config->getAppValue(Application::APP_NAME, 'requireConfirmation', 'no') === 'yes') {
			try {
				$token = $this->confirmationService->sendConfirmationEmail($user);
				$this->config->setUserValue($user->getUID(), Application::APP_NAME, 'delete_token', $token);
				return new JSONResponse([
					'message' => $this->l10n->t('Successfully sent email'),
				], Http::STATUS_CREATED);
			} catch (MissingEmailException $e) {
				return new JSONResponse([
					'message' => $this->l10n->t('You have no email set up into your account'),
				], Http::STATUS_BAD_REQUEST);
			} catch (Exception $e) {
				$this->logger->error('Unknown exception when sending email for purging user', ['exception' => $e]);
				return new JSONResponse([
					'message' => $this->l10n->t('Unexpected error sending email. Please contact your administrator.'),
				], Http::STATUS_INTERNAL_SERVER_ERROR);
			}
		} else {
			$this->performDelete($user);
			return new JSONResponse([], Http::STATUS_ACCEPTED);
		}
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 * @param string $token
	 * @return TemplateResponse
	 * @throws PreConditionNotMetException
	 */
	public function confirm(string $token): TemplateResponse {
		$user = $this->userSession->getUser();
		if (!$user) {
			$response = new TemplateResponse($this->appName, 'account-deleted', [
				'uid' => null,
				'status' => 'not-found'
			], 'guest');
			$response->setStatus(Http::STATUS_UNAUTHORIZED);
			return $response;
		}

		$uid = $user->getUID();
		$savedToken = $this->config->getUserValue($uid, Application::APP_NAME, 'delete_token', null);

		if ($savedToken !== $token) {
			$response = new TemplateResponse($this->appName, 'account-deleted', [
				'uid' => $uid,
				'status' => 'invalid-token',
				'rootURL' => $this->urlGenerator->getBaseUrl()
			], 'guest');
			$response->setStatus(Http::STATUS_NOT_FOUND);
			return $response;
		}

		$this->performDelete($user);

		return new TemplateResponse($this->appName, 'account-deleted', [
			'uid' => $uid,
			'status' => 'deleted'
		], 'guest');
	}

	/**
	 * @param IUser $user
	 * @throws PreConditionNotMetException
	 */
	private function performDelete(IUser $user): void {
		$this->config->deleteUserValue($user->getUID(), Application::APP_NAME, 'delete_token');
		try {
			$this->mailerService->sendFinalEmail($user);
		} catch (\Exception $e) {
			// Do nothing, this is not blocking
		}
		$user->setEnabled(false);

		/**
		 * If we delay purge, just set the date when the user should be removed to a config user value
		 */
		if ($this->config->getAppValue(Application::APP_NAME, 'delayPurge', 'no') === 'yes') {
			$this->config->setUserValue($user->getUID(), Application::APP_NAME, 'markedForPurge', 'yes');
			$this->config->setUserValue($user->getUID(), Application::APP_NAME, 'purgeDate', (string) (new DateTime())->getTimestamp());
		} else {
			$this->jobList->add(DeleteAccountData::class, ['uid' => $user->getUID()]);
		}
		$this->userSession->logout();
	}
}
