import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPapers } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Papers',
  description: 'In-depth technical white papers on frontend architecture and component design.',
  alternates: { canonical: '/papers' },
}

export default async function PapersIndexPage() {
  const papers = await getAllPapers()

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1
        className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: 'var(--content-foreground)' }}
      >
        White Papers
      </h1>
      <p className="mb-10 text-base" style={{ color: 'var(--muted-foreground)' }}>
        In-depth technical papers on component architecture, accessibility, and frontend engineering.
      </p>

      <div className="grid gap-4">
        {papers.map(paper => (
          <Link
            key={paper.slug}
            href={`/papers/${paper.slug}`}
            className="card-hover rounded-lg border p-6"
            style={{
              borderColor: 'var(--border)',
              backgroundColor: 'var(--content-background)',
            }}
          >
            <h2
              className="mb-2 text-lg font-semibold"
              style={{ color: 'var(--content-foreground)' }}
            >
              {paper.frontmatter.title}
            </h2>
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: 'var(--muted-foreground)' }}
            >
              <span>{paper.frontmatter.author}</span>
              {paper.frontmatter.date && (
                <>
                  <span aria-hidden="true">&middot;</span>
                  <time dateTime={paper.frontmatter.date}>
                    {new Date(paper.frontmatter.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </>
              )}
              {paper.frontmatter.estimated_reading_time && (
                <>
                  <span aria-hidden="true">&middot;</span>
                  <span>{paper.frontmatter.estimated_reading_time}</span>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
