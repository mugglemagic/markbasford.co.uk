import Link from 'next/link'
import type { Post } from '@/lib/content'
import { TagList } from '@/components/TagList'

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  const { frontmatter, slug } = post

  return (
    <article
      className="card-hover rounded-lg border p-5"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--content-background)',
      }}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs" style={{ color: 'var(--muted-foreground)' }}>
        {frontmatter.series && (
          <span
            className="rounded-full px-2 py-0.5 text-xs font-medium"
            style={{
              backgroundColor: 'var(--accent-background)',
              color: 'var(--text-link)',
            }}
          >
            {frontmatter.series}
            {frontmatter.part ? ` — Part ${frontmatter.part}` : ''}
          </span>
        )}
        <time dateTime={frontmatter.date}>
          {new Date(frontmatter.date).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <span aria-hidden="true">&middot;</span>
        <span>{frontmatter.estimated_reading_time}</span>
      </div>

      <h3 className="mb-2">
        <Link
          href={`/blog/${slug}`}
          className="link-hover text-lg font-semibold hover:underline"
          style={{ color: 'var(--content-foreground)' }}
        >
          {frontmatter.title}
        </Link>
      </h3>

      {frontmatter.tags.length > 0 && <TagList tags={frontmatter.tags} />}
    </article>
  )
}
