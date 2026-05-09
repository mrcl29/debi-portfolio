// src/i18n/utils.ts
import { ui, defaultLang, languages } from './ui';

export type Lang = keyof typeof languages;

export function useTranslations(lang: string | undefined) {
    const safeLang = (lang && lang in ui ? lang : defaultLang) as Lang;
    return ui[safeLang];
}

// Función auxiliar para generar rutas traducidas (ej: /es/about -> /en/about)
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as Lang;
  return defaultLang as Lang;
}
