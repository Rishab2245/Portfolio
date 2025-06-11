'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Tag, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/types';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data.posts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="al-folio-container py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 al-folio-text">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="al-folio-container py-12">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="al-folio-container py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold al-folio-heading mb-4">Blog</h1>
        <p className="text-lg al-folio-text">
          Thoughts, tutorials, and insights about technology, development, and my journey in tech.
        </p>
      </div>

      {/* Featured Posts */}
      {posts.some(post => post.featured) && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold al-folio-heading mb-6">Featured Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {posts
              .filter(post => post.featured)
              .slice(0, 2)
              .map((post) => (
                <article key={post._id} className="al-folio-card p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-4">
                    <div className="flex items-center gap-4 text-sm al-folio-text mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time>{formatDate(post.publishedAt)}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold al-folio-heading mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="al-folio-text leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full flex items-center gap-1"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 al-folio-link text-sm font-medium hover:underline"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
          </div>
        </div>
      )}

      {/* All Posts */}
      <div>
        <h2 className="text-2xl font-bold al-folio-heading mb-6">All Posts</h2>
        {posts.length === 0 ? (
          <div className="al-folio-card p-8 text-center">
            <p className="al-folio-text text-lg mb-4">No blog posts yet.</p>
            <p className="al-folio-text">
              Check back soon for updates on my latest projects and thoughts on technology!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post._id} className="al-folio-card p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 text-sm al-folio-text mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time>{formatDate(post.publishedAt)}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold al-folio-heading mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="al-folio-text leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full flex items-center gap-1"
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 al-folio-link text-sm font-medium hover:underline"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  
                  {post.featured && (
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

