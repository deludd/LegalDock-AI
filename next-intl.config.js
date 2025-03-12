// next-intl.config.js
module.exports = {
    locales: ['en', 'uk'],
    defaultLocale: 'en',
    messages: {
      en: () => import('./src/messages/en.json').then((module) => module.default),
      uk: () => import('./src/messages/uk.json').then((module) => module.default),
    }
  };