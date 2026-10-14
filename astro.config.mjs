// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages at https://alexalvarez092.github.io/trabajos-verticales-website/
// When a custom domain is set up, change `site` to the real domain and remove `base`.
export default defineConfig({
  site: 'https://alexalvarez092.github.io',
  base: '/trabajos-verticales-website',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'va', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [sitemap()],
});
