// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/lama-web',
  site: 'https://musosoft.github.io',
  vite: {
    define: {
      'process.env': process.env,
    },
  },
  integrations: [
    tailwind(),
  ],
});