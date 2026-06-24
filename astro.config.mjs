// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { site } from "./src/config/site.config.ts";

// https://astro.build/config
export default defineConfig({
  site: site.url,
  // Old essays lived under /writing; keep those links working.
  redirects: {
    "/writing": "/writings",
    "/writing/[...slug]": "/writings/[...slug]",
  },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
