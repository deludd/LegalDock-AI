'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export const LanguageSelector: React.FC = () => {
  const t = useTranslations('language');
  const locale = useLocale();
  
  return (
    <div className="flex gap-2">
      <Link 
        href={`/en`}
        className={`px-2 py-1 rounded text-sm ${locale === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        {t('en')}
      </Link>
      <Link 
        href={`/uk`}
        className={`px-2 py-1 rounded text-sm ${locale === 'uk' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        {t('uk')}
      </Link>
    </div>
  );
};

export default LanguageSelector;