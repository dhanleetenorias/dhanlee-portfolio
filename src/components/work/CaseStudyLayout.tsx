import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { ACCENT } from "@/lib/tokens";
import Reveal from "@/components/motion/Reveal";
import MetricRow from "@/components/work/MetricRow";
import ProcessDiagram from "@/components/work/ProcessDiagram";

export default function CaseStudyLayout({ project }: { project: Project }) {
  const accent = ACCENT[project.venture];

  return (
    <main className="mx-auto max-w-[1100px] px-6 pb-24 pt-14 md:pb-32">
      <article>
        {/* Header */}
        <header className="max-w-[720px]">
          <Reveal>
            <Link
              href="/work"
              className="text-[13.5px] font-medium text-muted transition-colors hover:text-ink"
            >
              ← All work
            </Link>
            <div className="mt-6 flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
              <span
                className={`text-[12.5px] font-semibold uppercase tracking-[0.08em] ${accent.text}`}
              >
                {project.dates}
              </span>
            </div>
            <h1 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
              {project.title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.7] text-soft">
              {project.oneLiner}
            </p>
            <p className="mt-2 text-[14px] text-muted">{project.role}</p>
            {project.confidentialityNote && (
              <p className="mt-5 rounded-[10px] border border-line bg-surface px-4 py-3 text-[13.5px] leading-[1.6] text-muted">
                {project.confidentialityNote}
              </p>
            )}
          </Reveal>
        </header>

        {/* Metrics */}
        <div className="mt-12">
          <MetricRow metrics={project.metrics} tintClass={accent.text} />
        </div>

        {/* Live demo strip */}
        {project.liveUrl && (
          <Reveal className="mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-[18px] border border-line bg-surface px-6 py-4 transition-colors hover:border-pp/40"
            >
              <span className="text-[15px] font-medium text-ink">
                Try the live demo — no login, seeded clinic workspace
              </span>
              <span className={`text-[14px] font-semibold ${accent.text}`}>
                {project.liveUrl.replace("https://", "")} ↗
              </span>
            </a>
          </Reveal>
        )}

        {/* Sections */}
        <div className="mt-16 space-y-16">
          {project.sections.map((section, idx) => {
            if (section.kind === "prose") {
              return (
                <Reveal key={idx} className="max-w-[720px]">
                  {section.heading && (
                    <h2 className="text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold tracking-[-0.01em] text-ink">
                      {section.heading}
                    </h2>
                  )}
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-[1.0625rem] leading-[1.75] text-soft"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
              );
            }

            if (section.kind === "list") {
              return (
                <div key={idx}>
                  <Reveal>
                    <h2 className="text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold tracking-[-0.01em] text-ink">
                      {section.heading}
                    </h2>
                  </Reveal>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {section.items.map((item) => (
                      <Reveal key={item.title}>
                        <div className="h-full rounded-[18px] border border-line bg-surface p-5">
                          <h3
                            className={`text-[15px] font-semibold ${accent.text}`}
                          >
                            {item.title}
                          </h3>
                          <p className="mt-2 text-[0.95rem] leading-[1.65] text-soft">
                            {item.body}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            }

            if (section.kind === "screenshots") {
              return (
                <div key={idx}>
                  <Reveal>
                    <h2 className="text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold tracking-[-0.01em] text-ink">
                      {section.heading}
                    </h2>
                  </Reveal>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {section.shots.map((shot) => (
                      <Reveal key={shot.src}>
                        <figure>
                          <div className="overflow-hidden rounded-[18px] border border-line bg-surface">
                            <Image
                              src={shot.src}
                              alt={shot.alt}
                              width={shot.width}
                              height={shot.height}
                              sizes="(min-width: 768px) 520px, 100vw"
                              className="w-full"
                            />
                          </div>
                          <figcaption className="mt-2.5 text-[13.5px] leading-[1.5] text-muted">
                            {shot.caption}
                          </figcaption>
                        </figure>
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            }

            // diagram
            return (
              <div key={idx}>
                <Reveal>
                  <h2 className="text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold tracking-[-0.01em] text-ink">
                    {section.heading}
                  </h2>
                </Reveal>
                <div className="mt-6">
                  <ProcessDiagram kind={section.diagram} />
                  <p className="mt-2.5 text-[13.5px] leading-[1.5] text-muted">
                    {section.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </main>
  );
}
