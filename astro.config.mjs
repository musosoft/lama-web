// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  base: '/lama-web',
  site: 'https://musosoft.github.io',
  output: 'server',

  integrations: [
    tailwind(),
  ],

  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
});