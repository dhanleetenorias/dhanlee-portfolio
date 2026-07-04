/**
 * Venture accent mapping — single source for per-venture colors.
 * Tint (-t) variants are the only accent colors used AS TEXT on dark
 * (contrast safety); base colors are for borders, dots, fills.
 */
export type Venture = "pp" | "hel" | "good" | "research";

export const ACCENT: Record<
  Venture,
  {
    base: string;
    tint: string;
    text: string;
    border: string;
    dot: string;
    hoverBorder: string;
  }
> = {
  pp: {
    base: "#84cc16",
    tint: "#bef264",
    text: "text-pp-t",
    border: "border-pp/40",
    dot: "bg-pp",
    hoverBorder: "hover:border-pp/40",
  },
  hel: {
    base: "#06b6d4",
    tint: "#67e8f9",
    text: "text-hel-t",
    border: "border-hel/40",
    dot: "bg-hel",
    hoverBorder: "hover:border-hel/40",
  },
  good: {
    base: "#6366f1",
    tint: "#a5b4fc",
    text: "text-good-t",
    border: "border-good/40",
    dot: "bg-good",
    hoverBorder: "hover:border-good/40",
  },
  research: {
    base: "#a855f7",
    tint: "#d8b4fe",
    text: "text-research-t",
    border: "border-research/40",
    dot: "bg-research",
    hoverBorder: "hover:border-research/40",
  },
};
