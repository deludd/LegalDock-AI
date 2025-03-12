'use client';

import { useTranslations } from 'next-intl';
import { DocumentUpload, LanguageSelector } from '@/components';

export default function Home() {
  const t = useTranslations();
  
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <LanguageSelector />
        </div>
        <h1 className="text-3xl font-bold mb-8 text-center">{t('title')}</h1>
        <p className="text-center mb-8">{t('subtitle')}</p>
        <DocumentUpload />
      </div>
    </main>
  );
}