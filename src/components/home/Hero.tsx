import Link from "next/link";
import { SITE } from "@/content/site";
import KineticHeadline from "@/components/motion/KineticHeadline";
import Reveal from "@/components/motion/Reveal";
import Portrait from "@/components/site/Portrait";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_minmax(280px,380px)]">
        <div>
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted">
              {SITE.eyebrow}
            </p>
          </Reveal>
          <KineticHeadline
            lines={SITE.headline}
            className="mt-5 text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink"
          />
          <Reveal delay={0.45}>
            <p className="mt-6 max-w-[560px] text-[1.0625rem] leading-[1.7] text-soft">
              {SITE.positioning}
            </p>
          </Reveal>
          <Reveal delay={0.55}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/work/pulsepilot"
                className="rounded-[10px] bg-pp px-5 py-2.5 text-[14.5px] font-semibold text-[#0d0e12] transition-opacity hover:opacity-90"
              >
                View PulsePilot →
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="rounded-[10px] border border-line bg-surface px-5 py-2.5 text-[14.5px] font-medium text-soft transition-colors hover:border-accent/40 hover:text-accent-t"
              >
                Get in touch
              </a>
              <Link
                href="/work"
                className="px-2 py-2.5 text-[14.5px] font-medium text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                All work ↗
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.3} className="mx-auto w-full max-w-[380px]">
          <Portrait />
        </Reveal>
      </div>
    </section>
  );
}
