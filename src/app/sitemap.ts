import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { VISIBLE_COLLEGES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...VISIBLE_COLLEGES.map((college) => ({
      url: `${SITE.url}/${college.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: college.slug === "uttaranchal-university" ? 1.0 : 0.9,
    })),
    {
      url: `${SITE.url}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE.url}/contact-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE.url}/policies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE.url}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
