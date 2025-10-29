import fs from "fs";
import path from "path";

export type PostMeta = {
  title: string;
  href: string;
  date: string;
  xs: string[];
  summary?: string;
  coverImage?: string;
  readingTime?: string;
  status?: "draft" | "published";
  featured?: boolean;
  category?: "Case" | "Reflection" | "Theory";
  references?: { label: string; url: string }[];
};

const POSTS_DIR = path.join(process.cwd(), "app", "posts");

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const slugs = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const posts: PostMeta[] = [];

  for (const slug of slugs) {
    const metaPath = path.join(POSTS_DIR, slug, "meta.json");
    if (!fs.existsSync(metaPath)) continue;

    try {
      const raw = fs.readFileSync(metaPath, "utf8");
      const data = JSON.parse(raw);

      if (!data.title || !data.date) continue;

      posts.push({
        ...data,
        href: `/posts/${slug}`,
      });
    } catch (e) {
      console.warn(`Failed to parse meta.json for post: ${slug}`);
      continue;
    }
  }

  return posts
    .filter((p) => (p.status ?? "published") === "published")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): PostMeta | null {
  const posts = getAllPosts();
  return posts.find((p) => p.href === `/posts/${slug}`) || null;
}
