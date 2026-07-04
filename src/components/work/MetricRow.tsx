import type { Metric } from "@/content/projects";
import CountUp from "@/components/motion/CountUp";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export default function MetricRow({
  metrics,
  tintClass,
}: {
  metrics: Metric[];
  tintClass: string;
}) {
  return (
    <StaggerGroup className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {metrics.map((m) => (
        <StaggerItem key={m.label}>
          <div className="rounded-[18px] border border-line bg-surface p-5">
            <p
              className={`text-[1.9rem] font-semibold tracking-[-0.02em] ${tintClass}`}
            >
              {m.countTo !== undefined ? (
                <CountUp
                  to={m.countTo}
                  prefix={m.value.startsWith("~") ? "~" : ""}
                  suffix={m.suffix ?? ""}
                />
              ) : (
                m.value
              )}
            </p>
            <p className="mt-1 text-[13px] font-medium text-muted">{m.label}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
