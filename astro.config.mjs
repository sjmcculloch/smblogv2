// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://www.smcculloch.com',
  // Gatsby's build output was `public/` (still in .gitignore), so keep
  // serving static assets from the existing `static/` folder instead.
  publicDir: 'static',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
})
