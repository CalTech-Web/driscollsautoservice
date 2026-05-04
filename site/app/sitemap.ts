import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://driscollsautoservice.com";
  const pages = [
    { path: "/", priority: 1.0, changeFreq: "monthly" as const },
    { path: "/diesel-heavy-equipment/", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/services/", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/specialty-services/", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/service-areas/", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/contact/", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/about/", priority: 0.7, changeFreq: "monthly" as const },
  ];

  return pages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changeFreq,
    priority: p.priority,
  }));
}
