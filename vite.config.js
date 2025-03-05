import { defineConfig } from 'vite';
import rewriteAll from 'vite-plugin-rewrite-all';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [rewriteAll()],
  base: '/creatiwise/',

  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});

