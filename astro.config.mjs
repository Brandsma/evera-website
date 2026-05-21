import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://everamovement.com',
  base: '/',
  output: 'static',
  integrations: [react()],
});
