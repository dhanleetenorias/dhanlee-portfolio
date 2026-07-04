import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { PROJECTS } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/work`, changeFrequency: "monthly", priority: 0.9 },
    ...PROJECTS.map((p) => ({
      url: `${SITE.url}/work/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
