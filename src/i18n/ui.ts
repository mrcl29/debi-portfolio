// src/i18n/ui.ts

export const languages = {
  es: 'Español',
  en: 'English',
  cat: 'Catalan',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'hero.title': 'Bienvenido a mi proyecto Bun + Astro',
    'hero.subtitle': 'Este texto cambia automáticamente.',
    'button.click': 'Haz click aquí',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'hero.title': 'Welcome to my Bun + Astro project',
    'hero.subtitle': 'This text translates automatically.',
    'button.click': 'Click here',
  },
  cat: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'hero.title': 'Bienvenue sur mon projet Bun + Astro',
    'hero.subtitle': 'Ce texte change automatiquement.',
    'button.click': 'Cliquez ici',
  }
} as const;
