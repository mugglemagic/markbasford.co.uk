import Link from 'next/link'

interface TagListProps {
  tags: string[]
  linked?: boolean
}

export function TagList({ tags, linked = true }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-1.5"  aria-label="Tags">
      {tags.map(tag => (
        <li key={tag}>
          {linked ? (
            <Link
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="pill-hover inline-flex min-h-[44px] items-center rounded-full border border-transparent px-2.5 text-xs font-medium"
              style={{
                backgroundColor: 'var(--accent-background)',
                color: 'var(--accent-foreground)',
              }}
            >
              {tag}
            </Link>
          ) : (
            <span
              className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{
                backgroundColor: 'var(--accent-background)',
                color: 'var(--accent-foreground)',
              }}
            >
              {tag}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
