// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel'
import solid from '@astrojs/solid-js';


// https://astro.build/config
export default defineConfig({
    output: 'server',
    vite: {
    plugins: [tailwindcss()],
  },
  integrations: [solid()],
  experimental: {
    clientPrerender: true,
  },

  build: {
    inlineStylesheets: 'always',
  },

  adapter: vercel(),
  site: 'https://www.pinkify.app',
});
