// SOURCE OF TRUTH: ~/Documents/Dhanlee_Tenorias_Resume.md + ~/pulsepilot/README.md
// Verified from live repo (2026-07-19): ~69k LOC, 185 API routes, 78 tables, 10 edge
// functions, 80+ tickets, 2 epics, 50+ docs, 20+ SOPs, 6 components,
// 40+ competitors, ~40% undercut, 30% margin floor.
import type { Venture } from "@/lib/tokens";

export type Metric = {
  value: string;
  label: string;
  countTo?: number;
  suffix?: string;
};

export type CaseSection =
  | { kind: "prose"; heading?: string; paragraphs: string[] }
  | { kind: "list"; heading: string; items: { title: string; body: string }[] }
  | {
      kind: "screenshots";
      heading: string;
      shots: {
        src: string;
        alt: string;
        caption: string;
        width: number;
        height: number;
      }[];
    }
  | {
      kind: "diagram";
      heading: string;
      diagram: "four-eye" | "research-funnel";
      caption: string;
    };

export type Project = {
  slug: string;
  venture: Venture;
  title: string;
  oneLiner: string;
  role: string;
  dates: string;
  metrics: Metric[];
  heroShot?: { src: string; alt: string; width: number; height: number };
  liveUrl?: string;
  confidentialityNote?: string;
  sections: CaseSection[];
};

export const PROJECTS: Project[] = [
  {
    slug: "pulsepilot",
    venture: "pp",
    title: "PulsePilot",
    oneLiner:
      "Recover more revenue before leads go cold — a revenue-risk inbox for aesthetic clinics.",
    role: "Solo build · Next.js, React, TypeScript, Supabase",
    dates: "2026 — ongoing",
    metrics: [
      { value: "~69k", label: "lines of code", countTo: 69, suffix: "k" },
      { value: "185", label: "API routes", countTo: 185 },
      { value: "78", label: "Postgres tables", countTo: 78 },
      { value: "7", label: "messaging channels", countTo: 7 },
    ],
    heroShot: {
      src: "/work/pulsepilot/inbox.png",
      alt: "PulsePilot priority inbox",
      width: 2560,
      height: 1600,
    },
    liveUrl: "https://pulsepilot-tan.vercel.app/demo",
    sections: [
      {
        kind: "prose",
        heading: "The problem",
        paragraphs: [
          "Aesthetic and medical clinics lose bookings inside their DM inboxes. A hot inquiry sits idle. A follow-up goes overdue. Pricing gets sent with no booking link. A voice note never gets answered. Each one is revenue quietly leaking out of a conversation nobody is watching.",
          "PulsePilot pulls DMs from 7 channels — Instagram, Messenger, Telegram, WhatsApp, SMS, Viber, and Email — into one revenue-risk queue, scores each conversation by urgency, and tells the operator exactly what to do next.",
        ],
      },
      {
        kind: "prose",
        heading: "The wedge",
        paragraphs: [
          "Where incumbents like Pabau, Zenoti, AestheticsPro, and Boulevard are all-in-one EMR and charting platforms, PulsePilot is intentionally narrow. It wins on one outcome: revenue recovery, not feature breadth. The launch scope is deliberately gated to Inbox, Analytics, and Settings — everything else stays behind a scope registry until the core earns its keep.",
        ],
      },
      {
        kind: "list",
        heading: "Stack, with reasons",
        items: [
          {
            title: "Next.js App Router",
            body: "Server-rendered dashboard — fast first paint for a tool operators keep open all day.",
          },
          {
            title: "Supabase Postgres + RLS",
            body: "Row-level security on every table. Multi-tenant isolation is enforced in the database, not in application code.",
          },
          {
            title: "Edge functions + Gemini AI",
            body: "10 Supabase Edge Functions handle multi-channel webhook ingest; Gemini powers smart replies, transcription, and translation — always behind a human-approval gate.",
          },
          {
            title: "Paddle billing",
            body: "Four per-clinic subscription tiers (Free / $17 / $43 / $85) with checkout, webhooks, and plan gating wired end-to-end.",
          },
        ],
      },
      {
        kind: "screenshots",
        heading: "Product tour",
        shots: [
          {
            src: "/work/pulsepilot/inbox.png",
            alt: "Priority inbox with per-channel badges",
            caption:
              "The priority inbox — conversations ranked by revenue risk, not recency, with a color rail and per-channel badges (Instagram, Messenger, WhatsApp…).",
            width: 2560,
            height: 1600,
          },
          {
            src: "/work/pulsepilot/overview.png",
            alt: "Clinic dashboard overview",
            caption:
              "Clinic overview — open risk, follow-ups due, attributed revenue, and an AI weekly digest above the fold.",
            width: 2560,
            height: 1600,
          },
          {
            src: "/work/pulsepilot/ai-draft.png",
            alt: "Conversation view with AI draft controls",
            caption:
              "A live conversation thread — AI-tools and AI-draft controls above a human composer with Form, Pay, and booking-link actions. The AI drafts; a human sends.",
            width: 2560,
            height: 1426,
          },
          {
            src: "/work/pulsepilot/analytics.png",
            alt: "Analytics view",
            caption:
              "The analytics view — the metrics the product tracks: revenue forecast, conversion funnel, response time, and AI-draft usage (shown here on seeded demo data).",
            width: 2560,
            height: 1600,
          },
          {
            src: "/work/pulsepilot/mobile.png",
            alt: "Mobile inbox",
            caption:
              "Fully responsive — the front desk isn't always at a desk.",
            width: 1170,
            height: 2532,
          },
        ],
      },
      {
        kind: "list",
        heading: "Tradeoffs I chose",
        items: [
          {
            title: "Deterministic SQL over an ML model",
            body: "Risk scoring runs on explainable SQL rules. Operators trust a score they can interpret; a black-box model would be more impressive and less used.",
          },
          {
            title: "Human approval on every AI draft",
            body: "The AI composer never auto-replies. Clinics answer patients; the product drafts. That line doesn't move.",
          },
          {
            title: "Focused mode as the default",
            body: "Most of the built surface area is gated off at launch. Shipping less was a decision, not a limitation.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Honest limitations",
        paragraphs: [
          "PulsePilot is pre-revenue. The live demo runs on a seeded clinic workspace, Meta app review constrains real-inbox onboarding, and the product is solo-maintained. This page will update as those change — the numbers above are the build, not the business.",
        ],
      },
    ],
  },
  {
    slug: "helity-delivery",
    venture: "hel",
    title: "Infrastructure Delivery at Helity",
    oneLiner:
      "Process design and delivery coordination for a remote European infrastructure team.",
    role: "Technical Project Manager · Elyrix / Helity.org",
    dates: "2026 — ongoing",
    metrics: [
      { value: "81", label: "tickets coordinated", countTo: 81 },
      { value: "2", label: "delivery epics completed", countTo: 2 },
      {
        value: "50+",
        label: "knowledge-base documents",
        countTo: 50,
        suffix: "+",
      },
      { value: "20+", label: "SOPs authored", countTo: 20, suffix: "+" },
    ],
    confidentialityNote:
      "Client infrastructure is confidential — this case study shows the process artifacts I designed, not the systems they govern.",
    sections: [
      {
        kind: "prose",
        heading: "The problem",
        paragraphs: [
          'A remote infrastructure team was delivering real work — servers, networking, security — but delivery had no gates. Completion meant "the engineer said it\'s done." There was no review step, no evidence standard, and no documentation system to hold what the team learned.',
        ],
      },
      {
        kind: "diagram",
        heading: "The 4-Eye Review process",
        diagram: "four-eye",
        caption:
          "The delivery workflow I proposed, got approved, and implemented — every ticket passes a second pair of eyes and an evidence check before Done.",
      },
      {
        kind: "prose",
        paragraphs: [
          "I designed the workflow end-to-end and then built it: new Jira workflow statuses, a Kanban board replacing the old setup, six system components applied retroactively across 80+ tickets, and saved review filters. I deliberately excluded myself as a reviewer — the coordinator who designed the gate shouldn't also be the gatekeeper.",
        ],
      },
      {
        kind: "list",
        heading: "The documentation system",
        items: [
          {
            title: "Diátaxis structure",
            body: "50+ documents organized by purpose — tutorials, how-to guides, reference, explanation — instead of one flat wiki.",
          },
          {
            title: "20+ SOPs",
            body: "Repeatable procedures with owners, so operational knowledge survives personnel changes.",
          },
          {
            title: "Rollout gate map & RACI",
            body: "Who validates what, at which stage, with what evidence.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Technical scoping without taking the keyboard",
        paragraphs: [
          "For a high-availability networking epic, I researched the failover approach (CARP/virtual-IP), verified provider-side constraints, and handed the engineers a strawman they could react to — coordination that accelerates implementation without owning it.",
          "Validation works the same way: I check completion evidence — certificate issuance, connectivity, recovery-path testing — against acceptance criteria from the coordination side. Engineers keep hands-on ownership.",
        ],
      },
    ],
  },
  {
    slug: "goodcommerce-research",
    venture: "good",
    title: "Product Research at Goodcommerce",
    oneLiner:
      "Decision-ready market research for private-label launches on Amazon.de.",
    role: "E-Commerce Product Research Specialist (Freelance) · Goodcommerce GmbH",
    dates: "Jun 2026 — ongoing",
    metrics: [
      { value: "40+", label: "competitors analyzed", countTo: 40, suffix: "+" },
      { value: "~40%", label: "price undercut identified" },
      {
        value: "30%",
        label: "margin floor validated",
        countTo: 30,
        suffix: "%",
      },
      { value: "4", label: "artifacts per SKU", countTo: 4 },
    ],
    confidentialityNote:
      "Client SKUs and deliverables are confidential — this page describes the methodology, not the products.",
    sections: [
      {
        kind: "prose",
        heading: "The problem",
        paragraphs: [
          "Launching a private-label product on Amazon.de is a capital decision made under uncertainty. Get the demand read wrong, the margin math wrong, or the IP clearance wrong, and the cost lands months later in unsold inventory or a takedown notice. The founder needed decision-ready evidence, not vibes.",
        ],
      },
      {
        kind: "diagram",
        heading: "The research pipeline",
        diagram: "research-funnel",
        caption:
          "Every SKU moves through the same pipeline and exits as a pursue/pass recommendation with the evidence attached.",
      },
      {
        kind: "list",
        heading: "What each SKU gets",
        items: [
          {
            title: "Market overview",
            body: "Competitor and demand analysis across 40+ Amazon.de and D2C listings using Helium 10 — pricing gaps, review positioning, demand signals. One analysis identified room to undercut the category leader by ~40%.",
          },
          {
            title: "Profitability model",
            body: "Margin modeling that includes VAT (reverse-charge), FBA and referral fees, landed cost, and freight — validated against a 30% margin floor with price-sensitivity scenarios.",
          },
          {
            title: "IP & design clearance",
            body: "Patent, registered-design, and trademark sweeps across EU/DE jurisdictions, delivered as written clearance records with design guardrails and a residual-risk assessment.",
          },
          {
            title: "Supplier spec sheet",
            body: "Supplier-ready technical specifications — dimensions, materials, finishes, and compliance requirements (REACH/nickel) — from sourcing and evaluating overseas manufacturers.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "How it runs",
        paragraphs: [
          "Recommendations go directly to the founder with clear pursue/pass rationale. Handoffs, status, and weekly check-ins run through Asana and Slack; time tracking and monthly invoicing are fully auditable. The quality bar is written into the SOPs: accurate, complete, verifiable.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
