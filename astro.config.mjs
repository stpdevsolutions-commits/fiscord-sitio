import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio 100% estático (SSG). Vercel detecta Astro y sirve `dist/`.
// El reparto de fiscord.lat entre este sitio y la app vive en vercel.json.
export default defineConfig({
  site: 'https://fiscord.lat',
  trailingSlash: 'never',
  // Conserva el espacio entre texto y enlaces inline en la prosa legal
  // (con compressHTML se pega "nuestraPolítica de Privacidad").
  compressHTML: false,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/borrador'),
    }),
  ],
  build: {
    // Assets de Astro en /_astro/ — no choca con /assets/ de la app Vite.
    assets: '_astro',
  },
});
