import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// For GitHub Pages: site = your GitHub Pages URL, base = repo name
// If you add a custom domain, set site to that domain and base to '/'
export default defineConfig({
  site: 'https://brandsma.github.io',
  base: '/evera-website',
  output: 'static',
  integrations: [react()],
});
