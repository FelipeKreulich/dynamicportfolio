// i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import PTBR from './locales/pt/pt-br.json';
import ENUS from './locales/en/en-us.json';

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
