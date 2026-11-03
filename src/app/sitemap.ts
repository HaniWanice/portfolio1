import type { MetadataRoute } from "next";

const base = "https://www.haniwanice.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/projets`, priority: 0.8 },
    { url: `${base}/projets/pont-glpi`, priority: 0.8 },
    { url: `${base}/labo`, priority: 0.8 },
    { url: `${base}/a-propos`, priority: 0.6 },
  ].map((e) => ({ ...e, lastModified: new Date(), changeFrequency: "monthly" as const }));
}
