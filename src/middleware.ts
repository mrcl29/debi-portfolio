// src/middleware.ts
import { defineMiddleware } from "astro:middleware";
import { defaultLang } from './i18n/ui';

export const onRequest = defineMiddleware((context, next) => {
  const pathname = context.url.pathname;

  if (pathname === '/' || pathname === '') {
    // Redirige permanentemente (308) o temporalmente (302) a /es/
    return context.redirect(`/${defaultLang}/`);
  }

  return next();
});
