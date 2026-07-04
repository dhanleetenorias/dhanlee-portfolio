"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Kinetic word-rise headline: each word rises from an overflow-hidden span.
 * Reduced motion → static render.
 */
export default function KineticHeadline({
  lines,
  className,
}: {
  lines: readonly string[];
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <h1 className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h1>
    );
  }

  let wordIndex = 0;

  return (
    <h1 className={className} aria-label={lines.join(" ")}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block">
          {line.split(" ").map((word, i) => {
            const idx = wordIndex++;
            return (
              <span
                key={i}
                className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom"
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + idx * 0.045,
                    ease: EASE,
                  }}
                >
                  {word}
                </motion.span>
                {i < line.split(" ").length - 1 ? " " : ""}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
