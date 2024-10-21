// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://lama-web.pages.dev',

  vite: {
    define: {
      'process.env': process.env,
    },
  },

  integrations: [tailwind()],
  output: 'server',
  adapter: cloudflare(),
});