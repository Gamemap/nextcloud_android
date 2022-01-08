<?php
/**
 * @copyright Copyright (c) 2017 Lukas Reschke <lukas@statuscode.ch>
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

namespace OCA\TermsOfService\Db\Mapper;

use OCP\IL10N;

class LanguageMapper {
	/** @var IL10N */
	private $l;

	public function __construct(IL10N $l10n) {
		$this->l = $l10n;
	}

	/**
	 * Whether the specified language code exists
	 *
	 * @param string|null $languageCode
	 * @return bool
	 */
	public function isValidLanguage($languageCode): bool {
		return isset($this->getLanguages()[$languageCode]);
	}

	public function getLanguages(): array {
		$mappedLanguages = [
			'aa' => $this->l->t('Afar'),
			'ab' => $this->l->t('Abkhazian'),
			'ae' => $this->l->t('Avestan'),
			'af' => $this->l->t('Afrikaans'),
			'ak' => $this->l->t('Akan'),
			'am' => $this->l->t('Amharic'),
			'an' => $this->l->t('Aragonese'),
			'ar' => $this->l->t('Arabic'),
			'as' => $this->l->t('Assamese'),
			'av' => $this->l->t('Avaric'),
			'ay' => $this->l->t('Aymara'),
			'az' => $this->l->t('Azerbaijani'),
			'ba' => $this->l->t('Bashkir'),
			'be' => $this->l->t('Belarusian'),
			'bg' => $this->l->t('Bulgarian'),
			'bh' => $this->l->t('Bihari languages'),
			'bi' => $this->l->t('Bislama'),
			'bm' => $this->l->t('Bambara'),
			'bn' => $this->l->t('Bengali'),
			'bo' => $this->l->t('Tibetan'),
			'br' => $this->l->t('Breton'),
			'bs' => $this->l->t('Bosnian'),
			'ca' => $this->l->t('Catalan; Valencian'),
			'ce' => $this->l->t('Chechen'),
			'ch' => $this->l->t('Chamorro'),
			'co' => $this->l->t('Corsican'),
			'cr' => $this->l->t('Cree'),
			'cs' => $this->l->t('Czech'),
			'cu' => $this->l->t('Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic'),
			'cv' => $this->l->t('Chuvash'),
			'cy' => $this->l->t('Welsh'),
			'da' => $this->l->t('Danish'),
			'de' => $this->l->t('German'),
			'dv' => $this->l->t('Divehi; Dhivehi; Maldivian'),
			'dz' => $this->l->t('Dzongkha'),
			'ee' => $this->l->t('Ewe'),
			'el' => $this->l->t('Greek, Modern (1453-)'),
			'en' => $this->l->t('English'),
			'eo' => $this->l->t('Esperanto'),
			'es' => $this->l->t('Spanish; Castilian'),
			'et' => $this->l->t('Estonian'),
			'eu' => $this->l->t('Basque'),
			'fa' => $this->l->t('Persian'),
			'ff' => $this->l->t('Fulah'),
			'fi' => $this->l->t('Finnish'),
			'fj' => $this->l->t('Fijian'),
			'fo' => $this->l->t('Faroese'),
			'fr' => $this->l->t('French'),
			'fy' => $this->l->t('Western Frisian'),
			'ga' => $this->l->t('Irish'),
			'gd' => $this->l->t('Gaelic; Scottish Gaelic'),
			'gl' => $this->l->t('Galician'),
			'gn' => $this->l->t('Guarani'),
			'gu' => $this->l->t('Gujarati'),
			'gv' => $this->l->t('Manx'),
			'ha' => $this->l->t('Hausa'),
			'he' => $this->l->t('Hebrew'),
			'hi' => $this->l->t('Hindi'),
			'ho' => $this->l->t('Hiri Motu'),
			'hr' => $this->l->t('Croatian'),
			'ht' => $this->l->t('Haitian; Haitian Creole'),
			'hu' => $this->l->t('Hungarian'),
			'hy' => $this->l->t('Armenian'),
			'hz' => $this->l->t('Herero'),
			'ia' => $this->l->t('Interlingua (International Auxiliary Language Association)'),
			'id' => $this->l->t('Indonesian'),
			'ie' => $this->l->t('Interlingue; Occidental'),
			'ig' => $this->l->t('Igbo'),
			'ii' => $this->l->t('Sichuan Yi; Nuosu'),
			'ik' => $this->l->t('Inupiaq'),
			'io' => $this->l->t('Ido'),
			'is' => $this->l->t('Icelandic'),
			'it' => $this->l->t('Italian'),
			'iu' => $this->l->t('Inuktitut'),
			'ja' => $this->l->t('Japanese'),
			'jv' => $this->l->t('Javanese'),
			'ka' => $this->l->t('Georgian'),
			'kg' => $this->l->t('Kongo'),
			'ki' => $this->l->t('Kikuyu; Gikuyu'),
			'kj' => $this->l->t('Kuanyama; Kwanyama'),
			'kk' => $this->l->t('Kazakh'),
			'kl' => $this->l->t('Kalaallisut; Greenlandic'),
			'km' => $this->l->t('Central Khmer'),
			'kn' => $this->l->t('Kannada'),
			'ko' => $this->l->t('Korean'),
			'kr' => $this->l->t('Kanuri'),
			'ks' => $this->l->t('Kashmiri'),
			'ku' => $this->l->t('Kurdish'),
			'kv' => $this->l->t('Komi'),
			'kw' => $this->l->t('Cornish'),
			'ky' => $this->l->t('Kirghiz; Kyrgyz'),
			'la' => $this->l->t('Latin'),
			'lb' => $this->l->t('Luxembourgish; Lëtzeburgesch'),
			'lg' => $this->l->t('Ganda'),
			'li' => $this->l->t('Limburgan; Limburger; Limburgish'),
			'ln' => $this->l->t('Lingala'),
			'lo' => $this->l->t('Lao'),
			'lt' => $this->l->t('Lithuanian'),
			'lu' => $this->l->t('Luba-Katanga'),
			'lv' => $this->l->t('Latvian'),
			'mg' => $this->l->t('Malagasy'),
			'mh' => $this->l->t('Marshallese'),
			'mi' => $this->l->t('Maori'),
			'mk' => $this->l->t('Macedonian'),
			'ml' => $this->l->t('Malayalam'),
			'mn' => $this->l->t('Mongolian'),
			'mr' => $this->l->t('Marathi'),
			'ms' => $this->l->t('Malay'),
			'mt' => $this->l->t('Maltese'),
			'my' => $this->l->t('Burmese'),
			'na' => $this->l->t('Nauru'),
			'nb' => $this->l->t('Bokmål, Norwegian; Norwegian Bokmål'),
			'nd' => $this->l->t('Ndebele, North; North Ndebele'),
			'ne' => $this->l->t('Nepali'),
			'ng' => $this->l->t('Ndonga'),
			'nl' => $this->l->t('Dutch; Flemish'),
			'nn' => $this->l->t('Norwegian Nynorsk; Nynorsk, Norwegian'),
			'no' => $this->l->t('Norwegian'),
			'nr' => $this->l->t('Ndebele, South; South Ndebele'),
			'nv' => $this->l->t('Navajo; Navaho'),
			'ny' => $this->l->t('Chichewa; Chewa; Nyanja'),
			'oc' => $this->l->t('Occitan (post 1500)'),
			'oj' => $this->l->t('Ojibwa'),
			'om' => $this->l->t('Oromo'),
			'or' => $this->l->t('Oriya'),
			'os' => $this->l->t('Ossetian; Ossetic'),
			'pa' => $this->l->t('Panjabi; Punjabi'),
			'pi' => $this->l->t('Pali'),
			'pl' => $this->l->t('Polish'),
			'ps' => $this->l->t('Pushto; Pashto'),
			'pt' => $this->l->t('Portuguese'),
			'qu' => $this->l->t('Quechua'),
			'rm' => $this->l->t('Romansh'),
			'rn' => $this->l->t('Rundi'),
			'ro' => $this->l->t('Romanian; Moldavian; Moldovan'),
			'ru' => $this->l->t('Russian'),
			'rw' => $this->l->t('Kinyarwanda'),
			'sa' => $this->l->t('Sanskrit'),
			'sc' => $this->l->t('Sardinian'),
			'sd' => $this->l->t('Sindhi'),
			'se' => $this->l->t('Northern Sami'),
			'sg' => $this->l->t('Sango'),
			'si' => $this->l->t('Sinhala; Sinhalese'),
			'sk' => $this->l->t('Slovak'),
			'sl' => $this->l->t('Slovenian'),
			'sm' => $this->l->t('Samoan'),
			'sn' => $this->l->t('Shona'),
			'so' => $this->l->t('Somali'),
			'sq' => $this->l->t('Albanian'),
			'sr' => $this->l->t('Serbian'),
			'ss' => $this->l->t('Swati'),
			'st' => $this->l->t('Sotho, Southern'),
			'su' => $this->l->t('Sundanese'),
			'sv' => $this->l->t('Swedish'),
			'sw' => $this->l->t('Swahili'),
			'ta' => $this->l->t('Tamil'),
			'te' => $this->l->t('Telugu'),
			'tg' => $this->l->t('Tajik'),
			'th' => $this->l->t('Thai'),
			'ti' => $this->l->t('Tigrinya'),
			'tk' => $this->l->t('Turkmen'),
			'tl' => $this->l->t('Tagalog'),
			'tn' => $this->l->t('Tswana'),
			'to' => $this->l->t('Tonga (Tonga Islands)'),
			'tr' => $this->l->t('Turkish'),
			'ts' => $this->l->t('Tsonga'),
			'tt' => $this->l->t('Tatar'),
			'tw' => $this->l->t('Twi'),
			'ty' => $this->l->t('Tahitian'),
			'ug' => $this->l->t('Uighur; Uyghur'),
			'uk' => $this->l->t('Ukrainian'),
			'ur' => $this->l->t('Urdu'),
			'uz' => $this->l->t('Uzbek'),
			've' => $this->l->t('Venda'),
			'vi' => $this->l->t('Vietnamese'),
			'vo' => $this->l->t('Volapük'),
			'wa' => $this->l->t('Walloon'),
			'wo' => $this->l->t('Wolof'),
			'xh' => $this->l->t('Xhosa'),
			'yi' => $this->l->t('Yiddish'),
			'yo' => $this->l->t('Yoruba'),
			'za' => $this->l->t('Zhuang; Chuang'),
			'zh' => $this->l->t('Chinese'),
			'zu' => $this->l->t('Zulu'),
		];

		return $mappedLanguages;
	}

}