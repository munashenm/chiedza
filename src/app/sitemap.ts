import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/about-circ",
  "/about-dr-chiedza-simbo",
  "/south-africa-immigration",
  "/uk-dependent-visa",
  "/skilled-migration",
  "/visa-appeals-refusals",
  "/testimonials",
  "/blog",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const pages = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));

  const articles = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
