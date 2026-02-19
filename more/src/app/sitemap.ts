import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://сочи-жк-море.рф";
  const posts = getAllPosts();

  const staticPages = [
    "",
    "/o-komplekse",
    "/planirovki",
    "/planirovki/studii",
    "/planirovki/1-komnatnye",
    "/planirovki/2-komnatnye",
    "/ceny",
    "/raspolozhenie",
    "/ipoteka",
    "/podbor",
    "/kontakty",
    "/sources",
    "/blog",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogPosts = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
