/**
 * ============================================================================
 *  SITE CONFIG — your one-stop control panel
 * ============================================================================
 *
 *  This is the ONE file to edit for global identity, links, navigation,
 *  and SEO defaults. If you only ever touch one file, make it this one.
 *
 *  Personalize the values below when contact details or public links change.
 * ============================================================================
 */

export const site = {
  // ── Identity ──────────────────────────────────────────────────────────
  name: "Negar Siyari",
  // Shown after the name on first reference; remove if you don't want it.
  pronunciation: "Neh-GAR See-YAH-ree",

  location: "Boston, MA",

  // The positioning line on your homepage (under your name). One sentence.
  headline:
    "Applied linguist working at the intersection of language, AI, and equity.",

  // A short bio (2–3 sentences) for the homepage. Warm and human.
  shortBio:
    "I'm an applied linguist and educator. I help language learners — especially refugees and newcomers — build the language and AI skills they need to thrive, and I research how that learning actually happens in the classroom.",

  // A longer bio for the About page. Edit freely.
  longBio:
    "I'm an applied linguist (PhD, Georgetown) and an educator in English as a second language and AI literacy. My work sits where language learning, generative AI, and equity meet — and it's grounded in the classroom, with the learners most often left out of new technology.",

  // ── Contact & social links ────────────────────────────────────────────
  //  Add or remove links here. Set a value to an empty string "" to hide it.
  //  NOTE: no personal email/phone/address by design.
  links: {
    linkedin: "https://www.linkedin.com/in/negar-siyari",
    scholar: "https://scholar.google.com/citations?hl=en&user=Tq9veQcAAAAJ",
    github: "https://github.com/negarsiyari",
    email: "", // intentionally blank — leave empty to keep email off the site
  },

  // The two "primary" actions a visitor can take (used on Home + Contact).
  primaryCta: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/negar-siyari",
  },
  secondaryCta: {
    label: "Read the research",
    href: "https://scholar.google.com/citations?hl=en&user=Tq9veQcAAAAJ",
  },

  // ── Navigation ────────────────────────────────────────────────────────
  //  The order here is the order in the header and footer.
  nav: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications" },
    { label: "Writings", href: "/writings" },
    { label: "Contact", href: "/contact" },
  ],

  // ── SEO & metadata defaults ───────────────────────────────────────────
  //  url: your canonical domain. CHANGE THIS when you buy a domain.
  //  Used for sitemap, Open Graph, and canonical links.
  url: "https://negarsiyari.com",
  seo: {
    titleDefault: "Negar Siyari",
    // Appears in browser tabs as "Page Title | Negar Siyari"
    titleTemplate: "%s | Negar Siyari",
    description:
      "Negar Siyari is an applied linguist and educator working at the intersection of language, AI, and equity.",
    // Default social-share image (1200×630). Drop a file at /public/og-default.png
    ogImage: "/og-default.png",
    locale: "en_US",
    // Twitter/X handle for cards, with the @ — leave "" if none.
    twitter: "",
  },
} as const;

export type Site = typeof site;
