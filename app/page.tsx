import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/content'
import { BlogCard } from '@/components/BlogCard'
import { skills } from '@/components/SkillIcons'

export default async function HomePage() {
  const posts = await getAllPosts()
  const latestPosts = posts.slice(0, 3)

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="mb-20">
        <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:gap-12">
          <div className="flex-1">
            <h1
              id="hero-heading"
              className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: 'var(--content-foreground)' }}
            >
              Mark Basford
            </h1>
            <p
              className="mb-6 text-xl leading-relaxed"
              style={{ color: 'var(--muted-foreground)' }}
            >
              The web should work for everyone.
              <br />
              Not most people. Everyone.
            </p>
            <p
              className="mb-8 max-w-2xl text-base leading-relaxed"
              style={{ color: 'var(--content-foreground)' }}
            >
              Principal Software Engineer at Tribepad. I build the foundations, patterns, and
              tools that let teams ship accessible, performant software with confidence.
              Creator of{' '}
              <span className="font-semibold" style={{ color: 'var(--text-link)' }}>
                Themis
              </span>{' '}
              — a WCAG 2.2 AAA-compliant component library.
            </p>
            <ul className="mb-8 flex flex-wrap gap-3" aria-label="Key skills">
              {skills.map(skill => (
                <li
                  key={skill.name}
                  className="pill-hover flex items-center gap-2 rounded-full border px-3 py-1.5"
                  style={{
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--content-background)',
                  }}
                >
                  <skill.icon />
                  <span
                    className="text-xs font-medium"
                    style={{ color: 'var(--content-foreground)' }}
                  >
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <Link
                href="/about"
                className="cta-primary inline-flex items-center rounded-md px-4 py-2 text-sm font-medium"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }}
              >
                About Me
              </Link>
              <Link
                href="/blog"
                className="cta-outline inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--content-foreground)',
                }}
              >
                Read the Blog
              </Link>
            </div>
          </div>
          <div className="profile-image-wrapper shrink-0">
            <Image
              src="/mark-basford.jpg"
              alt="Mark Basford"
              width={176}
              height={176}
              priority
              className="profile-hover rounded-full object-cover"
              style={{
                boxShadow: '0 0 0 3px var(--primary), 0 0 0 6px var(--page-background)',
              }}
            />
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section aria-labelledby="latest-posts-heading" className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2
            id="latest-posts-heading"
            className="text-2xl font-bold"
            style={{ color: 'var(--content-foreground)' }}
          >
            Latest Writing
          </h2>
          <Link
            href="/blog"
            className="link-hover text-sm font-medium"
            style={{ color: 'var(--text-link)' }}
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid gap-4">
          {latestPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Substack CTA */}
      <section aria-labelledby="substack-heading" className="mb-16">
        <a
          href="https://mugglemagic.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="card-hover flex items-center gap-4 rounded-lg border p-5"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'var(--content-background)',
          }}
        >
          <Image
            src="/icons/substack.webp"
            alt=""
            aria-hidden="true"
            width={36}
            height={36}
            className="shrink-0 rounded"
          />
          <div className="flex-1">
            <h2
              id="substack-heading"
              className="mb-0.5 text-sm font-semibold"
              style={{ color: 'var(--content-foreground)' }}
            >
              Subscribe on Substack
            </h2>
            <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
              Accessibility, performance, and architecture — delivered to your inbox.
            </p>
          </div>
          <span
            className="shrink-0 text-sm font-medium"
            style={{ color: 'var(--text-link)' }}
            aria-hidden="true"
          >
            Subscribe &#8599;
          </span>
        </a>
      </section>

      {/* Featured Paper */}
      <section aria-labelledby="featured-paper-heading">
        <h2
          id="featured-paper-heading"
          className="mb-4 text-2xl font-bold"
          style={{ color: 'var(--content-foreground)' }}
        >
          White Paper
        </h2>
        <Link
          href="/papers/three-layer-component-architecture"
          className="card-hover block rounded-lg border p-6"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'var(--content-background)',
          }}
        >
          <h3
            className="mb-2 text-lg font-semibold"
            style={{ color: 'var(--content-foreground)' }}
          >
            The Three-Layer Component Architecture
          </h3>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
            A deep dive into building accessible components that separate touch targets,
            visual design, and content — without compromise.
          </p>
        </Link>
      </section>
    </div>
  )
}
