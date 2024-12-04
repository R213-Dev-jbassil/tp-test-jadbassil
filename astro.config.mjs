// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';




import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), alpinejs()],
  adapter: netlify(),
  
});