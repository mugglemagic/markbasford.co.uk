import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, getPostsBySeries } from '@/lib/content'
import { renderMarkdown } from '@/lib/markdown'
import { TableOfContents } from '@/components/TableOfContents'
import { SeriesNav } from '@/components/SeriesNav'
import { TagList } from '@/components/TagList'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Not Found' }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.series
      ? `${post.frontmatter.series} — Part ${post.frontmatter.part}. ${post.frontmatter.estimated_reading_time} read.`
      : `${post.frontmatter.estimated_reading_time} read.`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.frontmatter.title,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const { html, headings } = await renderMarkdown(post.content)

  const seriesPosts = post.frontmatter.series
    ? await getPostsBySeries(post.frontmatter.series)
    : []

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    author: { '@type': 'Person', name: post.frontmatter.author },
    datePublished: post.frontmatter.date,
    description: post.frontmatter.series
      ? `${post.frontmatter.series} — Part ${post.frontmatter.part}. ${post.frontmatter.estimated_reading_time} read.`
      : `${post.frontmatter.estimated_reading_time} read.`,
    url: `https://markbasford.dev/blog/${slug}`,
    keywords: post.frontmatter.tags,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-10">
        <article>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm">
              <li>
                <Link href="/" className="link-hover" style={{ color: 'var(--muted-foreground)' }}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true" style={{ color: 'var(--muted-foreground)' }}>
                /
              </li>
              <li>
                <Link href="/blog" className="link-hover" style={{ color: 'var(--muted-foreground)' }}>
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" style={{ color: 'var(--muted-foreground)' }}>
                /
              </li>
              <li>
                <span style={{ color: 'var(--content-foreground)' }} aria-current="page">
                  {post.frontmatter.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            {post.frontmatter.series && (
              <Link
                href={`/series/${post.frontmatter.series.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  backgroundColor: 'var(--accent-background)',
                  color: 'var(--text-link)',
                }}
              >
                {post.frontmatter.series} — Part {post.frontmatter.part}
              </Link>
            )}
            <h1
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: 'var(--content-foreground)' }}
            >
              {post.frontmatter.title}
            </h1>
            <div
              className="flex flex-wrap items-center gap-3 text-sm"
              style={{ color: 'var(--muted-foreground)' }}
            >
              <span>{post.frontmatter.author}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={post.frontmatter.date}>
                {new Date(post.frontmatter.date).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.frontmatter.estimated_reading_time}</span>
            </div>
            {post.frontmatter.tags.length > 0 && (
              <div className="mt-4">
                <TagList tags={post.frontmatter.tags} />
              </div>
            )}
          </header>

          {/* Content */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Series navigation */}
          {seriesPosts.length > 1 && (
            <SeriesNav currentPost={post} seriesPosts={seriesPosts} />
          )}
        </article>

        {/* Table of Contents sidebar */}
        <TableOfContents headings={headings} />
      </div>
    </div>
    </>
  )
}
