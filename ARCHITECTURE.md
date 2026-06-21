# Architecture

This document keeps the technical notes for the personal website. The public README stays intentionally short.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- MDX content
- Cloudflare Workers static assets deployment

## Local Development

Use Node 22 for the closest match to the deployed build environment.

```bash
pnpm install
pnpm dev
```

The local dev server runs the Astro site. Most content changes should not require editing shared layout code.

## Build

```bash
pnpm build
```

The production output is written to `dist/`.

## Deployment

The repository is connected to Cloudflare Workers Builds.

- Production branch: `main`
- Build command: `pnpm build`
- Deploy command: `npx wrangler deploy`
- Static asset output: `dist/`
- Worker name: `negarsiyari-com`
- Production domains:
  - `negarsiyari.com`
  - `www.negarsiyari.com`

The Cloudflare Worker configuration lives in `wrangler.jsonc`.

## Project Structure

```text
public/                 Static files served as-is
src/assets/             Images imported by the site
src/components/         Reusable UI blocks
src/config/             Site-wide profile, links, nav, and SEO settings
src/content/projects/   Project case studies
src/content/writing/    Essay and writing entries
src/data/               Structured data such as publications
src/layouts/            Page shell and shared layouts
src/pages/              Astro routes
src/styles/             Global CSS
scripts/                Maintenance scripts
```

## Common Edits

| Change | File |
| --- | --- |
| Name, headline, bio, location | `src/config/site.config.ts` |
| LinkedIn, Scholar, GitHub links | `src/config/site.config.ts` |
| Navigation | `src/config/site.config.ts` |
| Homepage text | `src/pages/index.astro` |
| About page content | `src/pages/about.astro` |
| Projects | `src/content/projects/` |
| Essays | `src/content/writing/` |
| Publications | `src/data/publications.ts` |
| Global styling | `src/styles/global.css` |

## Assets and Privacy

Images committed to the repo should be checked for metadata before publication. The current public images were stripped of EXIF/GPS/XMP metadata before the repo was prepared for public visibility.

Unused image assets should be removed rather than left in the repository.

## Notes

The sample essays are placeholders for future writing. They can stay blank or draft-only until ready to publish.
