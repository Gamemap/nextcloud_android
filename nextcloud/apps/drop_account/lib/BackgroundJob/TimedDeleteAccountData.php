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

namespace OCA\DropAccount\BackgroundJob;

use DateInterval;
use DateTime;
use Exception;
use OCA\DropAccount\AppInfo\Application;
use OCA\DropAccount\Service\DeleteAccountDataService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;
use OCP\IConfig;
use Psr\Log\LoggerInterface;

class TimedDeleteAccountData extends TimedJob {

	/** @var DeleteAccountDataService */
	protected $service;
	/**
	 * @var IConfig
	 */
	private $config;
	/**
	 * @var LoggerInterface
	 */
	private $logger;

	public function __construct(ITimeFactory $time, IConfig $config, DeleteAccountDataService $service, LoggerInterface $logger) {
		parent::__construct($time);
		$this->service = $service;
		$this->config = $config;
		$this->logger = $logger;

		$this->setInterval(3600);
	}

	/**
	 * @param array $argument
	 * @return void
	 * @throws Exception
	 */
	public function run($argument) {
		/** @var string[] $userIds */
		$userIds = $this->config->getUsersForUserValue(Application::APP_NAME, 'markedForPurge', 'yes');
		$purgePeriod = $this->config->getAppValue(Application::APP_NAME, 'delayPurgeHours', '24');

		foreach ($userIds as $uid) {
			$this->logger->debug(sprintf('Checking if user <%s> should be purged...', $uid));
			$after = (int) $this->config->getUserValue($uid, Application::APP_NAME, 'purgeDate', 0);
			$after = (new DateTime())->setTimestamp($after);
			$duration = 'PT' . $purgePeriod . 'H';
			$after->add(new DateInterval($duration));
			if ($after < new DateTime()) {
				$this->logger->info(sprintf('Purge date of user <%s> has been reached (%s after %s), going to purge', $uid, $duration, $after->format('Y-m-d H:i:s')));
				$this->service->delete($uid);
			}
		}
	}
}
