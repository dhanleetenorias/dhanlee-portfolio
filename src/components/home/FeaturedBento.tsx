import Image from "next/image";
import Link from "next/link";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import Reveal from "@/components/motion/Reveal";

export default function FeaturedBento() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-24 md:py-32" id="work">
      <Reveal>
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted">
          Featured work
        </p>
        <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
          Shipped product, designed process, decision-ready research.
        </h2>
      </Reveal>

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* PulsePilot — 2x2 hero tile */}
        <StaggerItem className="md:col-span-2 md:row-span-2">
          <Link
            href="/work/pulsepilot"
            className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-surface transition-colors duration-300 hover:border-pp/40"
          >
            <div className="flex-1 p-7">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-pp" />
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-pp-t">
                  PulsePilot · Solo build
                </span>
              </div>
              <h3 className="mt-4 text-[1.5rem] font-semibold leading-snug tracking-[-0.01em] text-ink">
                Recover more revenue before leads go cold.
              </h3>
              <p className="mt-2 max-w-[480px] text-[0.95rem] leading-[1.65] text-soft">
                A revenue-risk inbox for aesthetic clinics — DMs across 7
                channels, ranked by what&rsquo;s quietly losing bookings.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["~69k LOC", "185 API routes", "7 channels", "Live demo"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-[8px] border border-line bg-bg px-2.5 py-1 text-[12.5px] font-medium text-soft"
                    >
                      {chip}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="relative mx-7 -mb-2 overflow-hidden rounded-t-[12px] border border-b-0 border-line">
              <Image
                src="/work/pulsepilot/inbox.png"
                alt="PulsePilot priority inbox"
                width={1280}
                height={800}
                sizes="(min-width: 768px) 660px, 100vw"
                className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>
        </StaggerItem>

        {/* Helity tile */}
        <StaggerItem>
          <Link
            href="/work/helity-delivery"
            className="group flex h-full flex-col justify-between rounded-[18px] border border-line bg-surface p-6 transition-colors duration-300 hover:border-hel/40"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-hel" />
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-hel-t">
                  Helity · Delivery
                </span>
              </div>
              <h3 className="mt-3 text-[1.1rem] font-semibold leading-snug text-ink">
                81-ticket infra rollout, 4-Eye Review process, 50+ doc knowledge
                base.
              </h3>
            </div>
            <p className="mt-4 text-[13.5px] text-muted transition-colors group-hover:text-soft">
              Process case study →
            </p>
          </Link>
        </StaggerItem>

        {/* GOOD.designs tile */}
        <StaggerItem>
          <Link
            href="/work/goodcommerce-research"
            className="group flex h-full flex-col justify-between rounded-[18px] border border-line bg-surface p-6 transition-colors duration-300 hover:border-good/40"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-good" />
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-good-t">
                  Goodcommerce · Research
                </span>
              </div>
              <h3 className="mt-3 text-[1.1rem] font-semibold leading-snug text-ink">
                40+ competitor analyses, margin models, IP clearance for
                Amazon.de launches.
              </h3>
            </div>
            <p className="mt-4 text-[13.5px] text-muted transition-colors group-hover:text-soft">
              Methodology case study →
            </p>
          </Link>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}
