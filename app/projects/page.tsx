import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllProjects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Things I have built and released — components, libraries, and tools, each with a live demo.',
  alternates: { canonical: '/projects' },
}

export default async function ProjectsIndexPage() {
  const projects = await getAllProjects()

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1
        className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: 'var(--content-foreground)' }}
      >
        Projects
      </h1>
      <p className="mb-10 text-base" style={{ color: 'var(--muted-foreground)' }}>
        Things I have built and put out into the world. Each one has a live demo, the source, and
        the package if there is one.
      </p>

      {projects.length === 0 ? (
        <p style={{ color: 'var(--muted-foreground)' }}>Nothing published yet.</p>
      ) : (
        <div className="grid gap-4">
          {projects.map(project => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="card-hover rounded-lg border p-6"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--content-background)',
              }}
            >
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h2
                  className="text-lg font-semibold"
                  style={{ color: 'var(--content-foreground)' }}
                >
                  {project.frontmatter.title}
                </h2>
                {project.frontmatter.status && (
                  <span
                    className="rounded-full border px-2 py-0.5 text-xs font-medium"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {project.frontmatter.status}
                  </span>
                )}
              </div>
              <p className="mb-3 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                {project.frontmatter.tagline}
              </p>
              {project.frontmatter.tags?.length > 0 && (
                <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                  {project.frontmatter.tags.map(tag => (
                    <li
                      key={tag}
                      className="rounded-full px-2 py-0.5 text-xs"
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
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
