import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://hs108.in',
  output: 'static',
  integrations: [
    mdx(),
  ],
});
