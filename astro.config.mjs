import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkLiteralNestedOl from './src/lib/remark-literal-nested-ol.mjs';

export default defineConfig({
  site: 'https://blog.hyunsang.dev',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: false,
    smartypants: false,
    remarkPlugins: [remarkLiteralNestedOl],
  },
});
