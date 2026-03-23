import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const blogDir = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
