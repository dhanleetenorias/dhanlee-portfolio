"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Abstract token-styled SVG diagrams. Zero confidential data —
 * these draw the *shape* of a process, not real systems.
 * The path draws itself on scroll-enter (the site's one "wow").
 */
export default function ProcessDiagram({
  kind,
}: {
  kind: "four-eye" | "research-funnel";
}) {
  const reduced = useReducedMotion();

  const stages =
    kind === "four-eye"
      ? ["Backlog", "In Progress", "4-Eye Review", "Evidence Validated", "Done"]
      : [
          "Market Overview",
          "Profitability Model",
          "IP Clearance",
          "Supplier Spec",
          "Pursue / Pass",
        ];

  const accent = kind === "four-eye" ? "#67e8f9" : "#a5b4fc";
  const accentDim = kind === "four-eye" ? "#06b6d4" : "#6366f1";

  const n = stages.length;
  const W = 900;
  const H = 120;
  const pad = 70;
  const step = (W - pad * 2) / (n - 1);

  return (
    <div className="overflow-x-auto rounded-[18px] border border-line bg-surface p-6">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="min-w-[640px]"
        role="img"
        aria-label={stages.join(" → ")}
      >
        {/* Connecting line, draws on scroll */}
        <motion.line
          x1={pad}
          y1={H / 2 - 10}
          x2={W - pad}
          y2={H / 2 - 10}
          stroke={accentDim}
          strokeWidth="1.5"
          strokeOpacity="0.5"
          initial={{ pathLength: reduced ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: reduced ? 0 : 1.4, ease: "easeInOut" }}
        />
        {stages.map((label, i) => {
          const cx = pad + i * step;
          return (
            <g key={label}>
              <motion.circle
                cx={cx}
                cy={H / 2 - 10}
                r="7"
                fill="#14151b"
                stroke={i === n - 1 ? accent : accentDim}
                strokeWidth="2"
                initial={{ scale: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: reduced ? 0 : 0.25 * i,
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
              />
              <motion.text
                x={cx}
                y={H / 2 + 26}
                textAnchor="middle"
                fill={i === n - 1 ? accent : "#8b8d98"}
                fontSize="13"
                fontWeight="500"
                initial={{ opacity: reduced ? 1 : 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: reduced ? 0 : 0.25 * i + 0.15,
                  duration: 0.4,
                }}
              >
                {label}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
