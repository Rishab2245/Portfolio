'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Tag, User, ArrowLeft, Share2 } from 'lucide-react';
import { BlogPost } from '@/lib/types';

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.slug) {
      fetchPost(params.slug as string);
    }
  }, [params.slug]);

  const fetchPost = async (slug: string) => {
    try {
      const response = await fetch(`/api/blog/${slug}`);
      if (!response.ok) {
        if (response.status === 404) {
          setError('Blog post not found');
        } else {
          throw new Error('Failed to fetch post');
        }
        return;
      }
      const data = await response.json();
      setPost(data);
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

  const sharePost = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return (
      <div className="al-folio-container py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 al-folio-text">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="al-folio-container py-12">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 text-lg mb-4">
            {error || 'Blog post not found'}
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 al-folio-link hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="al-folio-container py-12">
      {/* Navigation */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 al-folio-link text-sm hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          {post.featured && (
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                Featured Post
              </span>
            </div>
          )}
          
          <h1 className="text-4xl lg:text-5xl font-bold al-folio-heading mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm al-folio-text mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>{formatDate(post.publishedAt)}</time>
            </div>
            <button
              onClick={sharePost}
              className="flex items-center gap-2 al-folio-link hover:underline"
            >
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
          
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full flex items-center gap-1"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="al-folio-text leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="al-folio-text text-sm">
              Last updated: {formatDate(post.updatedAt)}
            </div>
            <div className="flex gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 al-folio-link text-sm hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                More Posts
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 al-folio-link text-sm hover:underline"
              >
                Discuss this post
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}

