import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPapers, getPaperBySlug } from '@/lib/content'
import { renderMarkdown } from '@/lib/markdown'
import { TableOfContents } from '@/components/TableOfContents'

interface PaperPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const papers = await getAllPapers()
  return papers.map(paper => ({ slug: paper.slug }))
}

export async function generateMetadata({ params }: PaperPageProps): Promise<Metadata> {
  const { slug } = await params
  const paper = await getPaperBySlug(slug)
  if (!paper) return { title: 'Not Found' }

  return {
    title: paper.frontmatter.title,
    description: `White paper by ${paper.frontmatter.author}.`,
    alternates: {
      canonical: `/papers/${slug}`,
    },
    openGraph: {
      title: paper.frontmatter.title,
      type: 'article',
      publishedTime: paper.frontmatter.date,
      authors: [paper.frontmatter.author],
    },
  }
}

export default async function PaperPage({ params }: PaperPageProps) {
  const { slug } = await params
  const paper = await getPaperBySlug(slug)
  if (!paper) notFound()

  const { html, headings } = await renderMarkdown(paper.content)

  return (
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
                <Link href="/papers" className="link-hover" style={{ color: 'var(--muted-foreground)' }}>
                  Papers
                </Link>
              </li>
              <li aria-hidden="true" style={{ color: 'var(--muted-foreground)' }}>
                /
              </li>
              <li>
                <span style={{ color: 'var(--content-foreground)' }} aria-current="page">
                  {paper.frontmatter.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <h1
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: 'var(--content-foreground)' }}
            >
              {paper.frontmatter.title}
            </h1>
            <div
              className="flex items-center gap-3 text-sm"
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
          </header>

          {/* Content */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        {/* Table of Contents sidebar */}
        <TableOfContents headings={headings} />
      </div>
    </div>
  )
}
