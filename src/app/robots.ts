import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/sitemap.xml", "/sitemap-main.xml"],
        disallow: ["/api/", "/thank-you"],
      },
    ],
    sitemap: [`${SITE.url}/sitemap.xml`, `${SITE.url}/sitemap-main.xml`],
    host: SITE.url,
  };
}
