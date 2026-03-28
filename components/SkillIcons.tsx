import Image from 'next/image'

function SkillIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={24}
      height={24}
      className="h-6 w-6"
    />
  )
}

export function TypeScriptIcon() {
  return <SkillIcon src="/icons/typescript.png" alt="TypeScript" />
}

export function WcagIcon() {
  return <SkillIcon src="/icons/wcag.svg" alt="WCAG" />
}

export function ReactIcon() {
  return <SkillIcon src="/icons/react.svg" alt="React" />
}

export function NextjsIcon() {
  return <SkillIcon src="/icons/nextjs.svg" alt="Next.js" />
}

export function LaravelIcon() {
  return <SkillIcon src="/icons/laravel.svg" alt="Laravel" />
}

export const skills = [
  {
    name: 'TypeScript',
    icon: TypeScriptIcon,
    description:
      'Strict, type-safe code from API boundaries to UI components. TypeScript catches entire categories of bugs at compile time and makes codebases navigable for both humans and AI assistants.',
  },
  {
    name: 'WCAG Compliance',
    icon: WcagIcon,
    description:
      'WCAG 2.2 AAA across every component and page. Not just passing audits — building interfaces that genuinely work for everyone, with screen readers, keyboard navigation, and high contrast as first-class concerns.',
  },
  {
    name: 'React',
    icon: ReactIcon,
    description:
      'Component architecture at scale using React Aria primitives, server components, and patterns that separate concerns cleanly. Building Themis proved that accessible components can also be beautiful.',
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
    description:
      'App Router, server actions, multi-zone architecture, and static generation. The Eos platform runs five independent Next.js zones behind a single domain — performant, deployable independently, and type-safe end to end.',
  },
  {
    name: 'Laravel',
    icon: LaravelIcon,
    description:
      'Backend API design, authentication flows, and enterprise integrations. Laravel provides the API layer that the frontend consumes — Sanctum for CSRF, queue-driven events, and clean service architecture.',
  },
]
