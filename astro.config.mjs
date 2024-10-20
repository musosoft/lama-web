// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  base: '/lama-web',
  site: 'https://musosoft.github.io',
  output: 'server',
  integrations: [
    tailwind(),
    db(),
  ],
});
