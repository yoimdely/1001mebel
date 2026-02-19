import postsData from "@/content/blog.generated.json";

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  html: string;
  image?: string;
}

const allPosts = (postsData as Post[]).map((post) => ({
  ...post,
  image: post.image || undefined,
}));

export function getAllPosts(): Post[] {
  return [...allPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const normalized = decodeURIComponent(slug).replace(/\/+$/, "").toLowerCase();
  return allPosts.find((post) => post.slug.toLowerCase() === normalized) || null;
}
