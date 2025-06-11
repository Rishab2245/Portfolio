export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  tags: string[];
  featured: boolean;
  published: boolean;
}

export interface BlogPostInput {
  title: string;
  content: string;
  excerpt: string;
  author: string;
  tags: string[];
  featured?: boolean;
  published?: boolean;
}

