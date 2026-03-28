import type { Heading } from '@/lib/markdown'

interface TableOfContentsProps {
  headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null

  return (
    <nav aria-label="Table of contents" className="hidden lg:block">
      <div className="sticky top-20">
        <h2
          className="mb-3 text-xs font-semibold uppercase tracking-wide"
          style={{ color: 'var(--muted-foreground)' }}
        >
          On this page
        </h2>
        <ul className="space-y-1.5 text-sm">
          {headings.map(heading => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 2) * 0.75}rem` }}
            >
              <a
                href={`#${heading.id}`}
                className="toc-link block leading-snug"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
