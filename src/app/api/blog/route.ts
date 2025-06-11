import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { BlogPost, BlogPostInput } from '@/lib/types';

// GET /api/blog - Get all blog posts
export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection<BlogPost>('blog_posts');

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const posts = await collection
      .find({ published: true })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await collection.countDocuments({ published: true });

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST /api/blog - Create a new blog post
export async function POST(request: NextRequest) {
  try {
    const body: BlogPostInput = await request.json();
    
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection<BlogPost>('blog_posts');

    // Generate slug from title
    const slug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const now = new Date();
    const blogPost: Omit<BlogPost, '_id'> = {
      ...body,
      slug,
      publishedAt: now,
      updatedAt: now,
      featured: body.featured || false,
      published: body.published || true,
    };

    const result = await collection.insertOne(blogPost);

    return NextResponse.json(
      { message: 'Blog post created successfully', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}

