'use client';

import { useLanguage } from '@/lib/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`text-sm font-medium transition-all duration-300 ${
          language === 'en' ? 'text-white' : 'text-white/50 hover:text-white'
        }`}
      >
        EN
      </button>
      <span className="text-white/20">|</span>
      <button
        onClick={() => setLanguage('es')}
        className={`text-sm font-medium transition-all duration-300 ${
          language === 'es' ? 'text-white' : 'text-white/50 hover:text-white'
        }`}
      >
        ES
      </button>
    </div>
  );
}; 