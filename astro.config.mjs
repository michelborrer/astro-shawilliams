import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Staging: astro-shawilliams.pages.dev — set SITE_URL=https://shawilliams.com at production cutover
const site = process.env.SITE_URL ?? 'https://astro-shawilliams.pages.dev';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
