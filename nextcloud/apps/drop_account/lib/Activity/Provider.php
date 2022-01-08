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

namespace OCA\DropAccount\Activity;

use InvalidArgumentException;
use OCA\DropAccount\AppInfo\Application;
use OCP\Activity\IEvent;
use OCP\Activity\IEventMerger;
use OCP\Activity\IProvider;
use OCP\IL10N;
use OCP\IURLGenerator;
use OCP\L10N\IFactory;

class Provider implements IProvider {
	/**
	 * @var IFactory
	 */
	private $languageFactory;

	/**
	 * @var IURLGenerator
	 */
	private $url;

	/** @var IL10N */
	private $l;

	/**
	 * @var IEventMerger
	 */
	private $eventMerger;

	/**
	 * Provider constructor.
	 *
	 * @param IFactory $languageFactory
	 * @param IURLGenerator $url
	 * @param IEventMerger $eventMerger
	 */
	public function __construct(IFactory $languageFactory, IURLGenerator $url, IEventMerger $eventMerger) {
		$this->languageFactory = $languageFactory;
		$this->l = $this->languageFactory->get(Application::APP_NAME);
		$this->url = $url;
		$this->eventMerger = $eventMerger;
	}

	/**
	 * @param string $language The language which should be used for translating, e.g. "en"
	 * @param IEvent $event The current event which should be parsed
	 * @param IEvent|null $previousEvent A potential previous event which you can combine with the current one.
	 *                                   To do so, simply use setChildEvent($previousEvent) after setting the
	 *                                   combined subject on the current event.
	 * @return IEvent
	 * @throws InvalidArgumentException Should be thrown if your provider does not know this event
	 */
	public function parse($language, IEvent $event, IEvent $previousEvent = null): IEvent {
		if ($event->getApp() !== Application::APP_NAME || $event->getType() !== 'account_deletion') {
			throw new InvalidArgumentException();
		}

		$this->l = $this->languageFactory->get(Application::APP_NAME, $language);
		$event->setIcon($this->url->imagePath('core', 'actions/delete.svg'));

		return $this->parseShortVersion($event, $previousEvent);
	}

	/**
	 * @param IEvent $event
	 * @param IEvent|null $previousEvent
	 * @return IEvent
	 */
	private function parseShortVersion(IEvent $event, IEvent $previousEvent = null): IEvent {
		$parameters = $event->getSubjectParameters();
		if (isset($parameters['email'], $parameters['username'], $parameters['name']) && $parameters['username'] !== $parameters['name']) {
			$event->setParsedSubject($this->l->t('%1$s (%2$s - %3$s) deleted their account', [$parameters['name'], $parameters['username'], $parameters['email']]));
		} elseif (isset($parameters['email'], $parameters['name'])) {
			$event->setParsedSubject($this->l->t('%1$s (%2$s) deleted their account', [$parameters['name'], $parameters['email']]));
		} elseif (isset($parameters['username'], $parameters['name']) && $parameters['username'] !== $parameters['name']) {
			$event->setParsedSubject($this->l->t('%1$s (%2$s) deleted their account', [$parameters['name'], $parameters['username']]));
		} elseif (isset($parameters['username'])) {
			$event->setParsedSubject($this->l->t('%1$s deleted their account', [$parameters['name'] ?? $parameters['username']]));
		} else {
			throw new InvalidArgumentException('Missing required username in parameters');
		}
		return $this->eventMerger->mergeEvents('username', $event, $previousEvent);
	}
}
