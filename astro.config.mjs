import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.hyunsang.dev',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: false,
    smartypants: false,
  },
});
