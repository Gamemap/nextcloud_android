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

use OCA\DropAccount\Service\DeleteAccountDataService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\QueuedJob;

class DeleteAccountData extends QueuedJob {

	/** @var DeleteAccountDataService */
	protected $service;

	public function __construct(ITimeFactory $time, DeleteAccountDataService $service) {
		parent::__construct($time);
		$this->service = $service;
	}

	/**
	 * @param string[] $argument
	 * @return void
	 */
	public function run($argument) {
		if (!isset($argument['uid'])) {
			throw new \InvalidArgumentException("DeleteAccountData job requires an uid argument");
		}
		$uid = $argument['uid'];

		$this->service->delete($uid);
	}
}
