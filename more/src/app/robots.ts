import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://сочи-жк-море.рф";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/spasibo"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
