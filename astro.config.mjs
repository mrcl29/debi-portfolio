// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'cat'],
    // Esto le dice a Astro: "No generes rutas ni redirecciones automáticas,
    // yo me encargo de todo con la carpeta [lang]".
    routing: 'manual',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});