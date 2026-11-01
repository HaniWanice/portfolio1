import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://haniwanice.com/sitemap.xml",
    host: "https://haniwanice.com",
  };
}
