import type { Metadata } from 'next'
import { getAllPosts, getAllSeries } from '@/lib/content'
import { BlogCard } from '@/components/BlogCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Technical writing on frontend architecture, accessibility, component design, and building at scale.',
  alternates: { canonical: '/blog' },
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts()
  const series = await getAllSeries()

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1
        className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: 'var(--content-foreground)' }}
      >
        Blog
      </h1>
      <p className="mb-10 text-base" style={{ color: 'var(--muted-foreground)' }}>
        Writing about the decisions behind building large-scale frontend systems.
      </p>

      {/* Series */}
      {series.length > 0 && (
        <section aria-labelledby="series-heading" className="mb-10">
          <h2
            id="series-heading"
            className="mb-4 text-lg font-semibold"
            style={{ color: 'var(--content-foreground)' }}
          >
            Series
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {series.map(s => (
              <Link
                key={s.slug}
                href={`/series/${s.slug}`}
                className="card-hover rounded-lg border p-4"
                style={{
                  borderColor: 'var(--border)',
                  backgroundColor: 'var(--content-background)',
                }}
              >
                <h3
                  className="text-sm font-semibold"
                  style={{ color: 'var(--content-foreground)' }}
                >
                  {s.name}
                </h3>
                <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  {s.postCount} {s.postCount === 1 ? 'post' : 'posts'}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section aria-labelledby="all-posts-heading">
        <h2
          id="all-posts-heading"
          className="mb-4 text-lg font-semibold"
          style={{ color: 'var(--content-foreground)' }}
        >
          All Posts
        </h2>
        <div className="grid gap-4">
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
