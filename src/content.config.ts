/**
 * ============================================================================
 *  CONTENT COLLECTIONS — the shape of your Projects and Writing
 * ============================================================================
 *
 *  You normally DON'T need to edit this file. To add content, drop a new
 *  .mdx file into:
 *     • src/content/projects/   → a project / case study
 *     • src/content/writing/    → an essay
 *
 *  The fields below are what each file's frontmatter can contain. Required
 *  fields have no `.optional()`. See the sample files for a copy-paste start.
 * ============================================================================
 */

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ── Projects ──────────────────────────────────────────────────────────────
//  Descriptive, informative case studies. By design there are NO external
//  links or downloadable files here — projects are explained, not linked out.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // one-line description, shown on cards
      year: z.string(), // e.g. "2025–present" or "2024"
      role: z.string().optional(), // your role, e.g. "Founder & Project Lead"
      status: z.enum(["active", "completed", "ongoing"]).default("completed"),
      featured: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      // Optional cover image; place files in src/assets and reference them.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Controls ordering on the Projects page (lower = earlier).
      order: z.number().default(99),
    }),
});

// ── Writing (essays) ────────────────────────────────────────────────────────
//  Long-form essays. Publications are handled separately as a simple list
//  in src/data/publications.ts (no MDX needed for those).
const writing = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
