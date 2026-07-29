import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllProjects, getProjectBySlug } from '@/lib/content'
import { renderMarkdown } from '@/lib/markdown'
import { getDemo } from '@/components/demos'
import { GitHubIcon, NpmIcon } from '@/components/SocialIcons'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map(project => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return { title: 'Not Found' }

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.tagline,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.tagline,
      type: 'article',
      publishedTime: project.frontmatter.date,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  const { html } = await renderMarkdown(project.content)
  const Demo = getDemo(project.frontmatter.demo)
  const { title, tagline, status, tags, repo, npm_package, npm_url } = project.frontmatter

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
            <Link
              href="/projects"
              className="link-hover"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Projects
            </Link>
          </li>
          <li aria-hidden="true" style={{ color: 'var(--muted-foreground)' }}>
            /
          </li>
          <li>
            <span style={{ color: 'var(--content-foreground)' }} aria-current="page">
              {title}
            </span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: 'var(--content-foreground)' }}
          >
            {title}
          </h1>
          {status && (
            <span
              className="rounded-full border px-2.5 py-1 text-xs font-medium"
              style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}
            >
              {status}
            </span>
          )}
        </div>
        <p className="mb-6 text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
          {tagline}
        </p>

        {tags?.length > 0 && (
          <ul className="mb-6 flex flex-wrap gap-2" aria-label="Technologies">
            {tags.map(tag => (
              <li
                key={tag}
                className="rounded-full px-2.5 py-1 text-xs"
                style={{
                  backgroundColor: 'var(--accent-background)',
                  color: 'var(--accent-foreground)',
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
            }}
          >
            <GitHubIcon size={16} />
            View on GitHub
            <span aria-label="(opens in new tab)">&#8599;</span>
          </a>

          {npm_url ? (
            <a
              href={npm_url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-outline inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium"
              style={{ borderColor: 'var(--border)', color: 'var(--content-foreground)' }}
            >
              <NpmIcon size={16} />
              {npm_package ?? 'npm'}
              <span aria-label="(opens in new tab)">&#8599;</span>
            </a>
          ) : (
            npm_package && (
              <span
                className="inline-flex items-center gap-2 rounded-md border border-dashed px-4 py-2 text-sm"
                style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}
              >
                <NpmIcon size={16} />
                <span>
                  <code>{npm_package}</code> — not published to npm yet
                </span>
              </span>
            )
          )}
        </div>
      </header>

      {/* Demo */}
      {Demo && (
        <section aria-labelledby="demo-heading" className="mb-14">
          <h2
            id="demo-heading"
            className="mb-6 text-2xl font-bold"
            style={{ color: 'var(--content-foreground)' }}
          >
            Live demo
          </h2>
          <Demo />
        </section>
      )}

      {/* Write-up */}
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
