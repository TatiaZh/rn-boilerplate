import * as Localization from 'expo-localization';
import * as Updates from 'expo-updates';
import i18n from 'i18n-js';
import { AsyncStorage } from 'react-native';

import en from './locales/en.json';
import ka from './locales/ka.json';
import ru from './locales/ru.json';

const translations = { ka, ru, en };

const phoneLocale = Localization.locale;
const locale =
	translations.hasOwnProperty(phoneLocale) ||
	phoneLocale.substring(0, phoneLocale.indexOf('-'));
i18n.fallbacks = true;
i18n.translations = translations;
i18n.defaultLocale = 'ka';
i18n.locale = locale;

export const strings = (name, params = {}) => {
	return i18n.t(name, params);
};

export const setLocale = async (locale, force) => {
	i18n.locale = locale;
	await setLanguage(locale);
	if (force) await Updates.reloadAsync();
};

export const getLocale = () => {
	return i18n.currentLocale();
};

export const setTranslations = (translations) => {
	i18n.translations = translations;
};

export const setLanguage = async (lang) => {
	await AsyncStorage.setItem('language', JSON.stringify(lang));
};

export const getLanguage = async () => {
	const lang = await AsyncStorage.getItem('language');
	return JSON.parse(lang);
};
