# Changelog

## 2.0.0 - 2021-12-06

### Added

- Support for Nextcloud 22, 23 and 24.
- Add possibility to require confirmation of the account deletion by email to the user
- Add possibility to delay the account purge, by simply disabling the account until it's destroyed. Administrators can "save" the account by re-enabling it before the purge happens.
- Sends a confirmation email to the user once the account is deleted (or scheduled to be).

### Removed

- Support for Nextcloud 19, 20 and 21.

## 1.0.2 - 2021-01-14

### Fixed

- Fixed impossibility to create/enable/disable/delete users because of broken event

## 1.0.1 - 2021-01-08

### Fixed

- Fixed nextcloud 19 support

## 1.0.0 - 2021-01-07

### Added

- Actual account deletion is now handled by background jobs
- Possibility for admins to require users to confirm their account deletion through e-mail
- Possibility for admins to chose when account removal background jobs are executed (immediately, after a day/week/month)
- Support for Nextcloud 20 and 21

### Removed

- Support for Nextcloud 16, 17 and 18

### Internal

- Lots of back-end refactor
- Front-end settings are now handled with VueJS
- Translations now happen [on Weblate](https://weblate.framasoft.org/engage/nextcloud/)
- Added tests and CI

## 0.2.1

### Fixed

- Actual version upgrade

## 0.2.0

### Added

- Support for Nextcloud 17, 18 and 19

### Fixed

- Activities display for admins

## 0.1.0

### Changed

- Refactor
- locale updates

### Fixed

- Fix NC 15 compatibility

## 0.0.13

### Added

- Add German ("Du" and "Sie") translation (courtesy of @alx-tuilmenau)

## 0.0.12

### Added

- Nextcloud 15 support

### Fixed

- Fix an js issue (thx @PeterEde)
- Set correct path for chinese translation (thx @chiyi4488)

## 0.0.11

### Fixed

- Improve (again) app description

## 0.0.10

### Fixed

- Proper formatting for description

## 0.0.9

### Added

- Added the ability to send activities to admin
- Translations are handled on https://trad.framasoft.org/
- @chiyi4488 added Traditional Taiwan Chinese translation
- Added loading indicator

### Removed

- Remove Nextcloud 12 compatibility

## 0.0.7

### Added

- Add Nextcloud 14 version compatibility

### Removed

- Remove Nextcloud 11 version compatibility

## 0.0.6

### Fixed

- Fixed checks for NC < 13

## 0.0.5

### Added
 - Check that user is not the only one on the instance
 - Check that user is not the only admin on the instance

## 0.0.4

### Fixed

- Actually bump version

## 0.0.3

### Fixed

- Add back Nextcloud 11 support

## 0.0.2

### Added

- Added a warning for the Nextcloud 11 session issue

### Changed

- Improved JS

### Fixed

- Fixed compatibility for Nextcloud 11 & 12

## 0.0.1

Initial release
