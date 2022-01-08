<?php
/**
 * @copyright Copyright (c) 2021 Thomas Citharel <nextcloud@tcit.fr>
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

namespace OCA\DropAccount\Listeners;

use OCA\DropAccount\AppInfo\Application;
use OCA\DropAccount\BackgroundJob\DeleteAccountData;
use OCA\DropAccount\MissingEmailException;
use OCA\DropAccount\Service\MailerService;
use OCP\BackgroundJob\IJobList;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\IConfig;
use OCP\User\Events\UserChangedEvent;
use Psr\Log\LoggerInterface;

class UserReEnabledListener implements IEventListener {

	/**
	 * @var IConfig
	 */
	private $config;
	/**
	 * @var IJobList
	 */
	private $jobList;
	/**
	 * @var MailerService
	 */
	private $mailerService;
	/**
	 * @var LoggerInterface
	 */
	private $logger;

	public function __construct(IJobList $jobList, IConfig $config, MailerService $mailerService, LoggerInterface $logger) {
		$this->jobList = $jobList;
		$this->config = $config;
		$this->mailerService = $mailerService;
		$this->logger = $logger;
	}

	/**
	 * @throws MissingEmailException
	 */
	public function handle(Event $event): void {
		$this->logger->debug('Handle event in UserReEnabledListener', ['event' => $event]);
		if ($event instanceof UserChangedEvent) {
			$user = $event->getUser();
			$uid = $user->getUID();
			/** @var mixed $feature */
			$feature = $event->getFeature();
			/** @var mixed $oldValue */
			$oldValue = $event->getOldValue();
			/** @var mixed $value */
			$value = $event->getValue();

			// We only do things on status being enabled
			if ($feature === 'enabled' && $value === true && $oldValue === false) {
				$this->logger->info('Re-enabling an user', ['event' => $event]);
				// Clear dedicated job if we have one
				if ($this->jobList->has(DeleteAccountData::class, ['uid' => $uid])) {
					$this->jobList->remove(DeleteAccountData::class, ['uid' => $uid]);
				}
				if ($this->config->getUserValue($uid, Application::APP_NAME, 'markedForPurge') === 'yes') {
					$this->mailerService->sendReactivationEmail($user);
				}
				// Always clear purge values anyway
				$this->config->deleteUserValue($uid, Application::APP_NAME, 'markedForPurge');
				$this->config->deleteUserValue($uid, Application::APP_NAME, 'purgeDate');
			}
		}
	}
}
