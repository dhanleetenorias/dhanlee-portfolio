"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EXPERIENCE, EDUCATION } from "@/content/experience";
import { ACCENT } from "@/lib/tokens";
import Reveal from "@/components/motion/Reveal";

export default function ExperienceTimeline() {
  const reduced = useReducedMotion();

  return (
    <section
      className="mx-auto max-w-[1100px] px-6 py-24 md:py-32"
      id="experience"
    >
      <Reveal>
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted">
          Experience
        </p>
        <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
          Where the work happened.
        </h2>
      </Reveal>

      <ol className="relative mt-12 space-y-10 border-l border-line pl-8 md:pl-10">
        {EXPERIENCE.map((role) => (
          <li key={`${role.title}-${role.dates}`} className="relative">
            <motion.span
              className={`absolute -left-[41px] top-1.5 h-3 w-3 rounded-full md:-left-[49px] ${ACCENT[role.venture].dot}`}
              initial={{ scale: reduced ? 1 : 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <Reveal>
              <time
                dateTime={role.dateStart}
                className="text-[13px] font-medium text-muted"
              >
                {role.dates}
              </time>
              <h3 className="mt-1 text-[1.1rem] font-semibold leading-snug text-ink">
                {role.title}
              </h3>
              <p className="mt-0.5 text-[14px] text-muted">{role.org}</p>
              <ul className="mt-3 space-y-2">
                {role.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="max-w-[640px] text-[0.95rem] leading-[1.65] text-soft"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
        {/* Education terminal node */}
        <li className="relative">
          <motion.span
            className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg md:-left-[49px]"
            initial={{ scale: reduced ? 1 : 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <Reveal>
            <time
              dateTime="2028"
              className="text-[13px] font-medium text-muted"
            >
              {EDUCATION.dates}
            </time>
            <h3 className="mt-1 text-[1.1rem] font-semibold leading-snug text-ink">
              {EDUCATION.degree}
            </h3>
            <p className="mt-0.5 text-[14px] text-muted">
              {EDUCATION.school} · {EDUCATION.detail}
            </p>
          </Reveal>
        </li>
      </ol>
    </section>
  );
}
