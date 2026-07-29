import type { DetailedHTMLProps, HTMLAttributes, Ref } from 'react'

/**
 * Types for the `gate-loader` custom element vendored at
 * `public/vendor/gate-loader/`. Mirrors the upstream `gate-loader.d.ts`:
 * https://github.com/mugglemagic/stargate-loader
 *
 * When the package lands on npm these can be dropped in favour of the
 * types it ships.
 */
export interface GateLoaderElement extends HTMLElement {
  /** `loop` dials continuously; `manual` is driven by the caller. */
  mode: 'loop' | 'manual'
  /** `series`: the top chevron clunks for every symbol. `movie`: each one clunks itself. */
  canon: 'series' | 'movie'
  /** Seven 1-based glyph numbers (1–39). */
  address: number[]
  /** Manual mode. 0–1, monotonic — lower it with `reset()`, not by assignment. */
  progress: number
  engageNext(): Promise<void>
  complete(): Promise<void>
  reset(): void
}

export interface GateLoaderChevronDetail {
  chevron: number
  glyph: number
  locked: boolean
}

type GateLoaderAttributes = Omit<
  DetailedHTMLProps<HTMLAttributes<GateLoaderElement>, GateLoaderElement>,
  'ref'
> & {
  size?: string | number
  mode?: 'loop' | 'manual'
  canon?: 'series' | 'movie'
  /** Seven comma-separated glyph numbers, e.g. `28,26,5,36,11,29,1`. */
  address?: string
  /**
   * Hides the built-in live region. Pass `''` for present, omit for absent —
   * `no-status="false"` would still match the `[no-status]` selector.
   */
  'no-status'?: ''
  ref?: Ref<GateLoaderElement>
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'gate-loader': GateLoaderAttributes
    }
  }
}
