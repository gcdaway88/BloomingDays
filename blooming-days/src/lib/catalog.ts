import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface CatalogItem {
  slug: string;
  name: string;
  price: string;
  description: string;
  image: string;
  featured: boolean;
  category: string;
  content: string;
}

const catalogDir = path.join(process.cwd(), "content/catalog");

export function getAllArrangements(): CatalogItem[] {
  const files = fs.readdirSync(catalogDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(catalogDir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        name: data.name ?? "",
        price: data.price ?? "",
        description: data.description ?? "",
        image: data.image ?? "",
        featured: data.featured ?? false,
        category: data.category ?? "Uncategorized",
        content,
      };
    });
}

export function getFeaturedArrangements(): CatalogItem[] {
  return getAllArrangements().filter((item) => item.featured);
}

export function getArrangementBySlug(slug: string): CatalogItem | undefined {
  return getAllArrangements().find((item) => item.slug === slug);
}
