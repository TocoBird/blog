import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { jaTop, enTop } from '@/i18n/pages/index';

/**
 * 最初に読み込まれる
 */

/** 英語 */
const tEn = {
  top: enTop,
};
/** 日本語 */
const tJa = {
  top: jaTop,
};

/** i18の構造 */
const en = {
  translation: tEn,
};
const ja = {
  translation: tJa,
};
const resources = {
  en,
  ja,
};

i18n.use(initReactI18next).init({
  resources,
  //   lng: 'en',
  fallbackLng: 'ja',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
});
