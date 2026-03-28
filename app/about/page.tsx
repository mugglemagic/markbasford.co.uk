import type { Metadata } from 'next'
import Image from 'next/image'
import { skills } from '@/components/SkillIcons'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Principal Software Engineer at Tribepad. The web should work for everyone — accessibility, performance, and architecture aren\'t features, they\'re foundations.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="mb-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
        <Image
          src="/mark-basford.jpg"
          alt="Mark Basford"
          width={128}
          height={128}
          priority
          className="profile-hover shrink-0 rounded-full object-cover"
          style={{
            boxShadow: '0 0 0 3px var(--primary), 0 0 0 6px var(--page-background)',
          }}
        />
        <div>
          <h1
            className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: 'var(--content-foreground)' }}
          >
            About
          </h1>
          <p className="text-lg" style={{ color: 'var(--muted-foreground)' }}>
            Principal Software Engineer at Tribepad.
          </p>
        </div>
      </div>

      <div className="prose">
        <p>
          The web should work for everyone. Not most people. Everyone.
        </p>
        <p>
          That&apos;s not an idealistic position — it&apos;s an engineering one.
          Accessibility, performance, and good architecture aren&apos;t features bolted on at
          the end. They&apos;re decisions made at the start, and they&apos;re what separates
          software that genuinely serves people from software that merely functions.
        </p>

        <h2>What I Do</h2>
        <p>
          As Principal Software Engineer at Tribepad, the work is about more than writing
          good code. It&apos;s about making sure the team has the foundations, patterns, and
          clarity to build with confidence — and that the right voices are in the room when
          decisions get made. The best solutions rarely come from one person. They come from
          engineers, product owners, designers, and stakeholders all pushing on a problem from
          different angles until something genuinely good emerges.
        </p>

        <h2>Approach</h2>
        <p>
          Performance and velocity aren&apos;t in tension with careful thinking — they depend
          on it. Architectural decisions made well upfront pay back tenfold in
          maintainability, reliability, and the freedom to move fast without quietly
          accumulating debt.
        </p>

        <h2>Skills</h2>
      </div>

      <section aria-labelledby="skills-heading" className="mb-12">
        <h2 id="skills-heading" className="sr-only">
          Skills
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(skill => (
            <div
              key={skill.name}
              className="card-hover rounded-lg border p-5"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--content-background)',
              }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'var(--accent-background)' }}
                  aria-hidden="true"
                >
                  <skill.icon />
                </div>
                <h3
                  className="text-sm font-semibold"
                  style={{ color: 'var(--content-foreground)' }}
                >
                  {skill.name}
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="prose">
        <h2>Themis</h2>
        <p>
          I created Themis, a WCAG 2.2 AAA-compliant React component library built on React
          Aria primitives. It uses a three-layer component architecture that separates touch
          targets, visual design, and content — proving that accessibility and aesthetics
          aren&apos;t mutually exclusive.
        </p>

        <h2>Writing</h2>
        <p>
          I write about the decisions behind building large-scale frontend systems. The blog
          series &ldquo;Architecting for Everything&rdquo; documents the reasoning behind
          every major architectural choice — not tutorials, but a reasoning journal.
        </p>
      </div>
    </div>
  )
}
