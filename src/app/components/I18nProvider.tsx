"use client";

import { useEffect, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '../../locales/en/translation.json';
import ltTranslation from '../../locales/lt/translation.json';

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initI18n = async () => {
      if (!i18n.isInitialized) {
        await i18n
          .use(LanguageDetector)
          .use(initReactI18next)
          .init({
            resources: {
              en: {
                translation: enTranslation,
              },
              lt: {
                translation: ltTranslation,
              },
            },
            fallbackLng: 'en',
            debug: false,
            interpolation: {
              escapeValue: false,
            },
            detection: {
              order: ['localStorage', 'navigator', 'htmlTag'],
              caches: ['localStorage'],
            },
          });
      }
      setIsInitialized(true);
    };

    initI18n();
  }, []);

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}