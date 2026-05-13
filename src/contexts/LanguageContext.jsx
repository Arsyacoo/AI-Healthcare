import { createContext, useContext, useMemo, useState } from 'react';
import { translations } from './translations.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('careguide_language') || 'id');

  function changeLanguage(nextLanguage) {
    setLanguage(nextLanguage);
    localStorage.setItem('careguide_language', nextLanguage);
  }

  const value = useMemo(() => {
    const dictionary = translations[language] || translations.id;
    const t = (path, replacements = {}) => {
      const template = path.split('.').reduce((current, key) => current?.[key], dictionary) || path;
      if (typeof template !== 'string') return template;

      return Object.entries(replacements).reduce(
        (text, [key, value]) => text.replaceAll(`{{${key}}}`, value),
        template,
      );
    };
    return { language, setLanguage: changeLanguage, t };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
