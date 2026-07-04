import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/content/projects";
import { ACCENT } from "@/lib/tokens";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies: PulsePilot (solo-built clinic CRM), infrastructure delivery at Helity, and e-commerce product research at Goodcommerce.",
};

export default function WorkIndex() {
  return (
    <main className="mx-auto max-w-[1100px] px-6 pb-24 pt-14 md:pb-32">
      <Reveal>
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted">
          Work
        </p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
          Case studies.
        </h1>
      </Reveal>

      <div className="mt-12 space-y-5">
        {PROJECTS.map((project) => {
          const accent = ACCENT[project.venture];
          return (
            <Reveal key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className={`group flex flex-col gap-6 rounded-[18px] border border-line bg-surface p-7 transition-colors duration-300 md:flex-row md:items-center ${accent.hoverBorder}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                    <span
                      className={`text-[12.5px] font-semibold uppercase tracking-[0.08em] ${accent.text}`}
                    >
                      {project.dates}
                    </span>
                  </div>
                  <h2 className="mt-3 text-[1.4rem] font-semibold tracking-[-0.01em] text-ink">
                    {project.title}
                  </h2>
                  <p className="mt-2 max-w-[560px] text-[0.975rem] leading-[1.65] text-soft">
                    {project.oneLiner}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.slice(0, 3).map((m) => (
                      <span
                        key={m.label}
                        className="rounded-[8px] border border-line bg-bg px-2.5 py-1 text-[12.5px] font-medium text-soft"
                      >
                        {m.value} {m.label}
                      </span>
                    ))}
                  </div>
                </div>
                {project.heroShot && (
                  <div className="w-full overflow-hidden rounded-[12px] border border-line md:w-[300px]">
                    <Image
                      src={project.heroShot.src}
                      alt={project.heroShot.alt}
                      width={project.heroShot.width}
                      height={project.heroShot.height}
                      sizes="(min-width: 768px) 300px, 100vw"
                      className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
              </Link>
            </Reveal>
          );
        })}
      </div>
    </main>
  );
}
