import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  title: string;
  href: string; // e.g. /posts/designing-for-flow
  date: string; // ISO
  xs: string[]; // dimension slugs
  summary?: string;
  coverImage?: string;
  readingTime?: string;
  status?: "draft" | "published";
  featured?: boolean;
  category?: "Case" | "Reflection" | "Theory";
  references?: { label: string; url: string }[];
};

const POSTS_DIR = path.join(process.cwd(), "app", "posts");

// naive reading time (optional)
function calcReadingTime(text: string) {
  const words = text.trim().split(/\s+/).length || 0;
  const minutes = Math.max(1, Math.round(words / 225));
  return `${minutes} min read`;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const slugs = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const posts: PostMeta[] = [];

  for (const slug of slugs) {
    const mdxPath = path.join(POSTS_DIR, slug, "page.mdx");
    if (!fs.existsSync(mdxPath)) continue;

    const raw = fs.readFileSync(mdxPath, "utf8");
    const { data, content } = matter(raw);

    // frontmatter validation (lightweight)
    const title = String(data.title || "");
    const date = String(data.date || "");
    const xs = Array.isArray(data.xs) ? (data.xs as string[]) : [];
    const summary = data.summary ? String(data.summary) : undefined;
    const coverImage = data.coverImage ? String(data.coverImage) : undefined;
    const readingTime = data.readingTime
      ? String(data.readingTime)
      : calcReadingTime(content);
    const status = (data.status as "draft" | "published") ?? "published";
    const featured = Boolean(data.featured);
    const category = data.category as PostMeta["category"] | undefined;
    const references = Array.isArray(data.references)
      ? (data.references as PostMeta["references"])
      : undefined;

    if (!title || !date) continue; // skip invalid posts

    posts.push({
      title,
      href: `/posts/${slug}`,
      date,
      xs,
      summary,
      coverImage,
      readingTime,
      status,
      featured,
      category,
      references,
    });
  }

  // only published, newest first
  return posts
    .filter((p) => (p.status ?? "published") === "published")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
