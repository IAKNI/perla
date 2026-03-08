import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://IAKNI.github.io',
  base: '/perla',
  integrations: [tailwind()],
  output: 'static',
});
