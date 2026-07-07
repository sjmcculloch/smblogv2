# smcculloch.com

Personal blog and website of Scott McCulloch, built with [Astro](https://astro.build)
and deployed to [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/).

Migrated from Gatsby 3 (gatsby-starter-morning-dew) in July 2026 — the original
Gatsby source is kept in [`legacy-gatsby/`](legacy-gatsby/) for reference during
the transition and can be deleted once parity is confirmed.

## Development

```bash
npm install
npm run dev      # dev server at localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the production build locally
```

Requires Node 20+.

## Structure

- `content/posts/` — blog posts (markdown, one folder per post with images).
  Frontmatter: `title`, `slug`, `date`, optional `published`, `unlisted`, `tags`, `cover`.
- `content/pages/` — static pages (About, Goals, Reading, Workouts).
- `src/pages/` — routes: paginated post list (`/`, `/pages/N`), post/page
  renderer (`[...slug].astro`), tags, `/cv`, 404.
- `src/data/site.ts` — site configuration (nav, footer, GTM id).
- `src/data/resume.js` — resume data rendered at `/cv`.
- `static/` — public assets served as-is, including `staticwebapp.config.json`
  (Azure SWA redirects for legacy URLs).

## Deployment

Pushes to `master` deploy via the GitHub Actions workflow in
`.github/workflows/`.
