// data/blog.ts - No blog content generated
export interface ContentBlock {
  type: string;
  text?: string;
  items?: string[];
  articles?: { slug: string; title: string; category: string; }[];
}

export interface BlogArticle {
  slug: string; title: string; metaTitle: string; metaDescription: string;
  category: string; publishDate: string; featuredImage: string;
  excerpt: string; content: ContentBlock[];
}

export const blogArticles: BlogArticle[] = [];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(a => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogArticles.map(a => a.slug);
}
