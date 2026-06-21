/**
 * ============================================================================
 *  PUBLICATIONS — your scholarly output, shown on the Writing page
 * ============================================================================
 *
 *  To add a publication, copy one block and edit it. Order matters: items
 *  appear top-to-bottom as listed here. Keep the newest / most important
 *  near the top.
 *
 *  Per your preference, forthcoming pieces are described briefly and marked
 *  `forthcoming: true` WITHOUT naming the journal or publisher yet. When a
 *  piece is published, set `forthcoming: false` and you can add the venue.
 * ============================================================================
 */

export type Publication = {
  /** Short, human title or working title of the piece. */
  title: string;
  /** Year (or expected year). */
  year: string;
  /** Type of work — shown as a small label. */
  kind: "article" | "chapter" | "book";
  /** True if not yet published. Shows a "Forthcoming" badge. */
  forthcoming: boolean;
  /** 1–2 sentence plain-language description of what it's about. */
  description: string;
  /** OPTIONAL venue (journal/publisher). Leave "" while forthcoming. */
  venue?: string;
  /** OPTIONAL link (e.g. DOI). Leave "" if none. */
  link?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Learning to Chat with AI: Empowering Refugee Language Learners in Task-Based Language Teaching",
    year: "2026",
    kind: "article",
    forthcoming: true,
    description:
      "A study of how refugee-background English learners can be taught to use generative AI chatbots as a real, learnable communicative task — making prompting itself a language skill, not a tool reserved for the already-fluent.",
    venue: "",
    link: "",
  },
  {
    title:
      "“I don't wanna be a regular citizen”: Afghan Newcomers' Perceptions of Their Language Learning Needs",
    year: "2026",
    kind: "chapter",
    forthcoming: true,
    description:
      "A close look at how Afghan newcomers describe their own language-learning goals — and how those aspirations often reach beyond the survival-focused content many refugee programs offer.",
    venue: "",
    link: "",
  },
  {
    title:
      "Teaching English to Speakers of Other Languages (TESOL): The Comprehensive Companion",
    year: "2027",
    kind: "book",
    forthcoming: true,
    description:
      "A co-authored companion volume on TESOL theory and practice for teachers and teacher-educators.",
    venue: "",
    link: "",
  },
];
