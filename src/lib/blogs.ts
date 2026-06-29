import blogs from "@/data/blogs.json";

export type BlogSection = {
  heading: string;
  body: string;
};

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  featured: boolean;
  tags: string[];
  intro: string;
  sections: BlogSection[];
  conclusion: string;
};

const typedBlogs = blogs as Blog[];

export function getAllBlogs() {
  return [...typedBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getFeaturedBlog() {
  return getAllBlogs().find((blog) => blog.featured) ?? getAllBlogs()[0];
}

export function getBlogBySlug(slug: string) {
  return typedBlogs.find((blog) => blog.slug === slug);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}
