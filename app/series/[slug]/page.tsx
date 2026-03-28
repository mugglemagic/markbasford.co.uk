import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getAllSeries, unslugifySeries } from '@/lib/content'

interface SeriesPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const series = await getAllSeries()
  return series.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: SeriesPageProps): Promise<Metadata> {
  const { slug } = await params
  const posts = await getAllPosts()
  const seriesName = unslugifySeries(slug, posts)
  if (!seriesName) return { title: 'Not Found' }

  return {
    title: seriesName,
    description: `All posts in the "${seriesName}" series.`,
    alternates: {
      canonical: `/series/${slug}`,
    },
  }
}

export default async function SeriesPage({ params }: SeriesPageProps) {
  const { slug } = await params
  const allPosts = await getAllPosts()
  const seriesName = unslugifySeries(slug, allPosts)

  if (!seriesName) notFound()

  const posts = allPosts
    .filter(p => p.frontmatter.series === seriesName)
    .sort((a, b) => a.frontmatter.part - b.frontmatter.part)

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
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
              {seriesName}
            </span>
          </li>
        </ol>
      </nav>

      <h1
        className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: 'var(--content-foreground)' }}
      >
        {seriesName}
      </h1>
      <p className="mb-10 text-base" style={{ color: 'var(--muted-foreground)' }}>
        {posts.length} {posts.length === 1 ? 'post' : 'posts'} in this series.
      </p>

      <ol className="space-y-4">
        {posts.map(post => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="card-hover flex items-start gap-4 rounded-lg border p-5"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--content-background)',
              }}
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }}
                aria-hidden="true"
              >
                {post.frontmatter.part}
              </span>
              <div>
                <h2
                  className="text-base font-semibold"
                  style={{ color: 'var(--content-foreground)' }}
                >
                  {post.frontmatter.title}
                </h2>
                <p className="mt-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  {new Date(post.frontmatter.date).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}{' '}
                  &middot; {post.frontmatter.estimated_reading_time}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
