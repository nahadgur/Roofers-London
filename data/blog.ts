// data/blog.ts - TEMPLATE: Replace placeholder content for each site
// The pipeline generates the full set of blog articles per niche/location

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  publishDate: string;
  featuredImage: string;
  excerpt: string;
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'list'; items: string[] }
  | { type: 'cta' }
  | { type: 'internal-link'; href: string; text: string; context: string }
  | { type: 'external-link'; href: string; text: string; source: string; rel: 'noopener noreferrer' }
  | { type: 'related-articles'; articles: { slug: string; title: string; category: string }[] };

const article1: BlogArticle = {
  slug: 'BLOG_1_SLUG',
  title: 'BLOG_1_TITLE',
  metaTitle: 'BLOG_1_META_TITLE',
  metaDescription: 'BLOG_1_META_DESCRIPTION',
  category: 'Pricing',
  publishDate: '2026-01-15',
  featuredImage: '/images/blog/blog-1.png',
  excerpt: 'BLOG_1_EXCERPT',
  content: [
    { type: 'p', text: 'BLOG_1_INTRO_PARAGRAPH' },
    { type: 'h2', text: 'BLOG_1_H2_1' },
    { type: 'p', text: 'BLOG_1_SECTION_1_TEXT' },
    { type: 'h2', text: 'BLOG_1_H2_2' },
    { type: 'p', text: 'BLOG_1_SECTION_2_TEXT' },
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'BLOG_2_SLUG', title: 'BLOG_2_TITLE', category: 'Buying Guide' },
      { slug: 'BLOG_3_SLUG', title: 'BLOG_3_TITLE', category: 'Planning' },
    ]},
  ],
};

const article2: BlogArticle = {
  slug: 'BLOG_2_SLUG',
  title: 'BLOG_2_TITLE',
  metaTitle: 'BLOG_2_META_TITLE',
  metaDescription: 'BLOG_2_META_DESCRIPTION',
  category: 'Buying Guide',
  publishDate: '2026-01-20',
  featuredImage: '/images/blog/blog-2.png',
  excerpt: 'BLOG_2_EXCERPT',
  content: [
    { type: 'p', text: 'BLOG_2_INTRO_PARAGRAPH' },
    { type: 'h2', text: 'BLOG_2_H2_1' },
    { type: 'p', text: 'BLOG_2_SECTION_1_TEXT' },
    { type: 'h2', text: 'BLOG_2_H2_2' },
    { type: 'p', text: 'BLOG_2_SECTION_2_TEXT' },
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'BLOG_1_SLUG', title: 'BLOG_1_TITLE', category: 'Pricing' },
    ]},
  ],
};

const article3: BlogArticle = {
  slug: 'BLOG_3_SLUG',
  title: 'BLOG_3_TITLE',
  metaTitle: 'BLOG_3_META_TITLE',
  metaDescription: 'BLOG_3_META_DESCRIPTION',
  category: 'Planning',
  publishDate: '2026-01-25',
  featuredImage: '/images/blog/blog-3.png',
  excerpt: 'BLOG_3_EXCERPT',
  content: [
    { type: 'p', text: 'BLOG_3_INTRO_PARAGRAPH' },
    { type: 'h2', text: 'BLOG_3_H2_1' },
    { type: 'p', text: 'BLOG_3_SECTION_1_TEXT' },
    { type: 'h2', text: 'BLOG_3_H2_2' },
    { type: 'p', text: 'BLOG_3_SECTION_2_TEXT' },
    { type: 'cta' },
    { type: 'related-articles', articles: [
      { slug: 'BLOG_1_SLUG', title: 'BLOG_1_TITLE', category: 'Pricing' },
      { slug: 'BLOG_2_SLUG', title: 'BLOG_2_TITLE', category: 'Buying Guide' },
    ]},
  ],
};

export const blogArticles: BlogArticle[] = [article1, article2, article3];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(a => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogArticles.map(a => a.slug);
}
