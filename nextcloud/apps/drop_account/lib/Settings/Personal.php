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

namespace OCA\DropAccount\Settings;

use OCA\DropAccount\AppInfo\Application;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\IConfig;
use OCP\IGroupManager;
use OCP\IUserManager;
use OCP\IUserSession;
use OCP\Settings\ISettings;
use OCP\Util;

class Personal implements ISettings {

	/** @var IUserSession */
	private $userSession;

	/**
	 * @var IUserManager
	 */
	private $userManager;

	/**
	 * @var IGroupManager
	 */
	private $groupManager;
	/**
	 * @var IInitialState
	 */
	private $initialState;
	/**
	 * @var IConfig
	 */
	private $config;

	public function __construct(IConfig $config, IUserSession $userSession, IUserManager $userManager, IGroupManager $groupManager, IInitialState $initialState) {
		$this->config = $config;
		$this->userSession = $userSession;
		$this->userManager = $userManager;
		$this->groupManager = $groupManager;
		$this->initialState = $initialState;
	}

	/**
	 * @return TemplateResponse returns the instance with all parameters set, ready to be rendered
	 * @since 9.1
	 */
	public function getForm(): TemplateResponse {
		$user = $this->userSession->getUser();
		if ($user) {
			$onlyUser = $this->userManager->countUsers() < 2;
			$adminGroup = $this->groupManager->get('admin');
			$onlyAdmin = $adminGroup && $adminGroup->count() < 2 && $this->groupManager->isAdmin($user->getUID());
			$requiresConfirmation = $this->config->getAppValue(Application::APP_NAME, 'requireConfirmation', 'no') === 'yes';
			$hasEmailForConfirmation = $requiresConfirmation && !($user->getEMailAddress() === null || $user->getEMailAddress() === '');
			$willDelayPurge = $this->config->getAppValue(Application::APP_NAME, 'delayPurge', 'no') === 'yes';
			$delayPurgeHours = (int) $this->config->getAppValue(Application::APP_NAME, 'delayPurgeHours', '24');

			Util::addScript(Application::APP_NAME, 'drop_account-personal-settings');
			Util::addStyle(Application::APP_NAME, 'personal');
			$this->initialState->provideInitialState('has_email_for_confirmation', $hasEmailForConfirmation);
			$this->initialState->provideInitialState('only_user', $onlyUser);
			$this->initialState->provideInitialState('only_admin', $onlyAdmin);
			$this->initialState->provideInitialState('will_delay_purge', $willDelayPurge);
			$this->initialState->provideInitialState('delay_purge_hours', $delayPurgeHours);
			$this->initialState->provideInitialState('require_confirmation', $requiresConfirmation);
		}

		return new TemplateResponse(Application::APP_NAME, 'personal');
	}

	/**
	 * @return string the section ID, e.g. 'sharing'
	 * @since 9.1
	 * @psalm-return 'drop_account'
	 */
	public function getSection(): string {
		return Application::APP_NAME;
	}

	/**
	 * @return int whether the form should be rather on the top or bottom of
	 * the admin section. The forms are arranged in ascending order of the
	 * priority values. It is required to return a value between 0 and 100.
	 *
	 * E.g.: 70
	 * @since 9.1
	 * @psalm-return 40
	 */
	public function getPriority(): int {
		return 40;
	}
}
