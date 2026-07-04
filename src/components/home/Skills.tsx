import { SKILLS } from "@/content/skills";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export default function Skills() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-24 md:py-32">
      <Reveal>
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted">
          Competencies
        </p>
        <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
          The toolkit.
        </h2>
      </Reveal>

      <div className="mt-10 space-y-8">
        {SKILLS.map((group) => (
          <div key={group.label}>
            <Reveal>
              <h3 className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted">
                {group.label}
              </h3>
            </Reveal>
            <StaggerGroup stagger={0.03} className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <StaggerItem key={skill}>
                  <span className="inline-block rounded-[8px] border border-line bg-surface px-3 py-1.5 text-[13.5px] font-medium text-soft">
                    {skill}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        ))}
      </div>
    </section>
  );
}
