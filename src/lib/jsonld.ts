import { SITE } from "@/content/site";
import { SKILLS } from "@/content/skills";
import type { Project } from "@/content/projects";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.name,
        email: `mailto:${SITE.email}`,
        jobTitle:
          "Software Builder · Technical Project Manager · Product Researcher",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Subic Bay Freeport Zone",
          addressCountry: "PH",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Lyceum of Subic Bay",
        },
        knowsAbout: SKILLS.flatMap((g) => g.items).slice(0, 20),
        url: SITE.url,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}/#person` },
      },
    ],
  };
}

export function projectJsonLd(project: Project) {
  if (project.slug === "pulsepilot") {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.title,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: project.liveUrl,
      description: project.oneLiner,
      author: { "@id": `${SITE.url}/#person` },
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.oneLiner,
    author: { "@id": `${SITE.url}/#person` },
  };
}
