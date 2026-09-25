import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hs108.in',
  output: 'static',
  integrations: [
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
