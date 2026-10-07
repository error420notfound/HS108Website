import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { heroShaderComponents } from './src/components/shader/shader-build.mjs';

export default defineConfig({
  site: 'https://hs108.in',
  output: 'static',
  integrations: [
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss(), heroShaderComponents()],
    optimizeDeps: { exclude: ['shaders'] },
  },
});
