import Link from 'next/link'
import type { Post } from '@/lib/content'

interface SeriesNavProps {
  currentPost: Post
  seriesPosts: Post[]
}

export function SeriesNav({ currentPost, seriesPosts }: SeriesNavProps) {
  const currentIndex = seriesPosts.findIndex(p => p.slug === currentPost.slug)
  const prevPost = currentIndex > 0 ? seriesPosts[currentIndex - 1] : null
  const nextPost = currentIndex < seriesPosts.length - 1 ? seriesPosts[currentIndex + 1] : null

  if (!prevPost && !nextPost) return null

  return (
    <nav
      aria-label="Series navigation"
      className="mt-12 grid gap-4 border-t pt-8 sm:grid-cols-2"
      style={{ borderColor: 'var(--border)' }}
    >
      {prevPost ? (
        <Link
          href={`/blog/${prevPost.slug}`}
          className="card-hover flex flex-col gap-1 rounded-lg border p-4"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'var(--content-background)',
          }}
        >
          <span className="block text-xs" style={{ color: 'var(--muted-foreground)' }}>
            &larr; Previous
          </span>
          <span
            className="block text-sm font-medium"
            style={{ color: 'var(--content-foreground)' }}
          >
            Part {prevPost.frontmatter.part}: {prevPost.frontmatter.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {nextPost && (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="card-hover flex flex-col gap-1 rounded-lg border p-4 sm:text-right"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'var(--content-background)',
          }}
        >
          <span className="block text-xs" style={{ color: 'var(--muted-foreground)' }}>
            Next &rarr;
          </span>
          <span
            className="block text-sm font-medium"
            style={{ color: 'var(--content-foreground)' }}
          >
            Part {nextPost.frontmatter.part}: {nextPost.frontmatter.title}
          </span>
        </Link>
      )}
    </nav>
  )
}
