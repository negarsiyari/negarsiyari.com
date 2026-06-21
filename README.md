# Negar Siyari — Personal Website

A calm, minimal, editorial personal site. Built with [Astro](https://astro.build),
TypeScript, Tailwind CSS, and MDX. It's designed as a **personal website kit**:
you edit simple content files, not page layouts.

> **New here / coming back after a while?** Read the "Where do I edit…?" table
> below. It tells you exactly which file to open for any change.

---

## Where do I edit…?

| I want to change… | Open this file |
| --- | --- |
| My name, headline, bio, location | `src/config/site.config.ts` |
| My links (LinkedIn, Scholar, GitHub) | `src/config/site.config.ts` → `links` |
| The navigation menu | `src/config/site.config.ts` → `nav` |
| SEO title / description / domain | `src/config/site.config.ts` → `seo` and `url` |
| Homepage "What I do" text | `src/pages/index.astro` |
| The About page bio & education | `src/pages/about.astro` (bio lives in the config) |
| A project | a file in `src/content/projects/` (see below) |
| A publication | `src/data/publications.ts` |
| An essay | a file in `src/content/writing/` (see below) |
| Colors / fonts / overall look | `src/styles/global.css` |

> 🔎 **Tip:** anything you still need to personalize is tagged `[FILL IN]`.
> Search the whole project for `[FILL IN]` to find every spot at once.

---

## Local development

You need [Node.js](https://nodejs.org) 20, 22, or 24 installed. Node 26 is
currently avoided for this project because it can hang during Astro's startup
and build steps on this machine.

```bash
cd site
pnpm install     # first time only — installs dependencies
pnpm dev         # start the local site at http://localhost:4321
```

Leave `pnpm dev` running and edit files; the browser updates automatically.
Press `Ctrl + C` in the terminal to stop it.

```bash
pnpm build       # build the final site into the dist/ folder
pnpm preview     # preview that final build locally
```

---

## How to change global site settings

Everything about *you* lives in **one file**: `src/config/site.config.ts`.

Open it and edit the values — name, headline, short bio, long bio, location,
links, navigation, and SEO defaults are all there, each with a comment
explaining it. Save the file and the site updates.

To **change your domain** (e.g. once you buy one): change the `url` value in that
same file. That single line feeds the sitemap, social-share links, and canonical
URLs.

To **hide a link** (say you don't want GitHub public): set its value to an empty
string `""` in the `links` section. It disappears from the footer and Contact
page automatically.

---

## How to add a project

Projects are descriptive case studies (no external links or downloads by design).

1. Copy an existing file in `src/content/projects/` (e.g. `ai-without-borders.mdx`).
2. Rename it — **the filename becomes the URL** (`my-project.mdx` →
   `/projects/my-project`).
3. Edit the frontmatter at the top (between the `---` lines):

   ```yaml
   ---
   title: "My Project"
   summary: "One sentence shown on the card."
   year: "2025"
   role: "My role"               # optional
   status: "active"              # active | ongoing | completed
   featured: false               # optional
   tags: ["Tag one", "Tag two"]  # optional
   order: 5                       # lower numbers appear first
   ---
   ```

4. Write the body below the frontmatter using the case-study blocks:

   ```mdx
   import CaseStudySection from "@/components/CaseStudySection.astro";
   import Quote from "@/components/Quote.astro";

   <CaseStudySection title="What it is">
     Your text here. **Bold**, *italic*, and lists all work.
   </CaseStudySection>

   <Quote cite="Optional source">A highlighted line.</Quote>
   ```

5. Save. The project appears on `/projects` automatically.

---

## How to add a writing post (essay)

1. Copy `src/content/writing/sample-essay.mdx` to a new name
   (`my-essay.mdx` → `/writing/my-essay`).
2. Edit the frontmatter:

   ```yaml
   ---
   title: "My Essay Title"
   description: "One-sentence summary."
   date: 2026-03-01
   tags: ["essay"]
   draft: false          # set true to hide it while you work
   ---
   ```

3. Write your essay below using Markdown (`##` for headings, `**bold**`, lists,
   `[links](https://…)`).
4. Save. Published (non-draft) essays appear under "Essays" on `/writing`.

### Adding a publication (not an essay)

Publications are a simple list, not full pages. Open `src/data/publications.ts`,
copy one entry, and edit it. Forthcoming pieces are marked `forthcoming: true`
and (by preference) don't show a journal/publisher until you add one.

---

## Adding your photo

A photo slot is ready on the About page but turned off by default. To turn it on:

1. Create a folder `src/assets/` and put your photo there as `portrait.jpg`.
2. Open `src/pages/about.astro` and follow the two `PORTRAIT` comments —
   uncomment the `import` line and the `<Image>` block. Delete the dashed
   placeholder box.

To change the social-share image (the picture shown when your site is linked on
LinkedIn etc.), replace `public/og-default.png` with your own 1200×630 image.

---

## Deploying to Cloudflare Pages

This is a static site, so deployment is simple and free on Cloudflare Pages.

### Option A — Connect a Git repository (recommended)

1. Push this `site/` folder to a GitHub/GitLab repository.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com) go to
   **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick your repository and use these build settings:
   - **Framework preset:** `Astro`
   - **Build command:** `pnpm build`
   - **Build output directory:** `dist`
   - **Root directory:** `site` (only if the repo root contains this folder)
4. Click **Save and Deploy**. Every future `git push` redeploys automatically.

### Option B — Direct upload

```bash
cd site
pnpm build
npx wrangler pages deploy dist
```

### After deploying: set your domain

1. Buy a domain (e.g. `negarsiyari.com`).
2. In Cloudflare Pages → your project → **Custom domains**, add it and follow
   the prompts.
3. Update **one line**: set `url` in `src/config/site.config.ts` to your real
   domain, then redeploy. This fixes the sitemap and share links.

---

## Project structure

```
site/
├── public/                 # static files served as-is (favicon, OG image, robots.txt)
├── src/
│   ├── config/
│   │   └── site.config.ts  # ⭐ your one-stop control panel
│   ├── content/
│   │   ├── projects/       # one .mdx file per project
│   │   └── writing/        # one .mdx file per essay
│   ├── data/
│   │   └── publications.ts # your publications list
│   ├── components/         # the reusable blocks (Hero, Section, ProjectCard, …)
│   ├── layouts/            # the page shell (header/footer/SEO)
│   ├── pages/              # the actual pages and URL structure
│   └── styles/
│       └── global.css      # colors, fonts, dark mode
├── astro.config.mjs        # Astro + integrations (rarely edited)
└── package.json
```

---

## The building blocks

Pages are composed from a small, deliberate set of blocks (in `src/components/`):
`Hero`, `Section`, `TextBlock`, `ProjectCard`, `ProjectGrid`, `WritingList`,
`PublicationList`, `Quote`, `Timeline`, `ImageBlock`, `ContactCTA`,
`CaseStudyHeader`, and `CaseStudySection`. This is intentional — a few excellent
blocks keep the whole site coherent. You shouldn't need to edit them often.

## What's already included

Dark/light mode · responsive layout · SEO metadata · Open Graph defaults ·
sitemap · `robots.txt` · accessible navigation (keyboard + visible focus) ·
reduced-motion support · semantic HTML.
