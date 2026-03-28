import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default async function NotFound() {
  const posts = await getAllPosts()
  const latestPosts = posts.slice(0, 3)

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <div className="mb-16 text-center">
        <h1
          className="mb-4 text-6xl font-bold"
          style={{ color: 'var(--text-link)' }}
        >
          404
        </h1>
        <p
          className="mb-8 text-lg"
          style={{ color: 'var(--muted-foreground)' }}
        >
          This page doesn&apos;t exist. It might have been moved or removed.
        </p>
        <Link
          href="/"
          className="cta-primary inline-flex items-center rounded-md px-4 py-2 text-sm font-medium"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
          }}
        >
          Go home
        </Link>
      </div>

      <section aria-labelledby="suggestions-heading">
        <h2
          id="suggestions-heading"
          className="mb-6 text-lg font-semibold"
          style={{ color: 'var(--content-foreground)' }}
        >
          Maybe try one of these?
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/about"
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
              About
            </h3>
            <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
              Who I am and what I do
            </p>
          </Link>
          <Link
            href="/blog"
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
              Blog
            </h3>
            <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
              Writing on architecture, accessibility, and frontend
            </p>
          </Link>
        </div>

        {latestPosts.length > 0 && (
          <div className="mt-8">
            <h3
              className="mb-4 text-sm font-semibold"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Latest posts
            </h3>
            <ul className="space-y-2">
              {latestPosts.map(post => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="link-hover text-sm font-medium"
                    style={{ color: 'var(--content-foreground)' }}
                  >
                    {post.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  )
}
