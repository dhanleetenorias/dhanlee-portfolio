// SOURCE OF TRUTH: ~/Documents/Dhanlee_Tenorias_Resume.md
// Bullets are lightly compressed from the resume — never inflated.
import type { Venture } from "@/lib/tokens";

export type Role = {
  title: string;
  org: string;
  dates: string;
  dateStart: string; // ISO for <time>
  venture: Venture;
  bullets: string[];
};

export const EXPERIENCE: Role[] = [
  {
    title: "E-Commerce Product Research Specialist (Freelance)",
    org: "Goodcommerce GmbH (GOOD.designs) · Schweinfurt, Germany · Remote",
    dates: "Jun 2026 – Present",
    dateStart: "2026-06",
    venture: "good",
    bullets: [
      "End-to-end market research and sourcing analysis for private-label jewelry SKUs on Amazon.de — competitor analysis across 40+ listings, margin models with a 30% floor, supplier specs, and IP clearance.",
      "Deliver pursue/pass recommendations directly to the founder through a standardized, decision-ready artifact set per SKU.",
    ],
  },
  {
    title:
      "Technical Project Manager — Infrastructure Delivery & Documentation",
    org: "Elyrix / Helity.org · Remote",
    dates: "2026 – Present",
    dateStart: "2026-01",
    venture: "hel",
    bullets: [
      "Coordinated an 80+ ticket infrastructure rollout across two completed delivery epics; designed the team's delivery workflow and review gates.",
      "Architected a Diátaxis-structured knowledge base — 50+ documents including 20+ SOPs — and validate completion evidence against acceptance criteria.",
    ],
  },
  {
    title: "Academic Research Assistant — AI & Legacy Software",
    org: "Remote · Part-time Research Support",
    dates: "2025 – 2026",
    dateStart: "2025-01",
    venture: "research",
    bullets: [
      "Researched TAM, UTAUT, and UTAUT2 adoption frameworks for research on AI-assisted legacy software modernization.",
    ],
  },
  {
    title: "AI Output Evaluator",
    org: "Alignerr · Project-based · Remote",
    dates: "2026",
    dateStart: "2026-01",
    venture: "research",
    bullets: [
      "Evaluated agent outputs using state-based rubrics and objective scoring; verified final-state requirements in YAML-formatted scenarios.",
    ],
  },
  {
    title: "Documentation & Data Support",
    org: "School & Small Business Projects · Subic, Philippines",
    dates: "2023 – 2025",
    dateStart: "2023-01",
    venture: "research",
    bullets: [
      "Maintained documentation, structured reports, and spreadsheets; supported records for a family-run rental operation.",
    ],
  },
];

export const EDUCATION = {
  degree: "BS Computer Engineering",
  school: "Lyceum of Subic Bay",
  dates: "Expected 2028",
  detail: "Member, Computer Engineering Club",
};
