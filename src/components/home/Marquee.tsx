"use client";

import { useReducedMotion } from "framer-motion";

const ITEMS = [
  "Full-stack builds",
  "Technical delivery",
  "Process design",
  "E-commerce research",
  "AI-orchestrated development",
  "Documentation systems",
];

/**
 * One slim, slow marquee band — motion life without the gimmick.
 * Static wrap on reduced motion.
 */
export default function Marquee() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className="border-y border-line py-4">
        <p className="mx-auto max-w-[1100px] px-6 text-center text-[13px] font-medium uppercase tracking-[0.14em] text-muted">
          {ITEMS.join("  ·  ")}
        </p>
      </div>
    );
  }

  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center"
    >
      {ITEMS.map((item) => (
        <span
          key={item + (ariaHidden ? "-b" : "-a")}
          className="flex items-center whitespace-nowrap px-6 text-[13px] font-medium uppercase tracking-[0.14em] text-muted"
        >
          {item}
          <span className="ml-12 h-1 w-1 rounded-full bg-line" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-line py-4 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
