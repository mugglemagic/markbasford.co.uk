import type { DetailedHTMLProps, HTMLAttributes, Ref } from 'react'

/**
 * JSX support for the `gate-loader` custom element, plus a local copy of its
 * shape.
 *
 * @mugglemagic/stargate-loader ships perfectly good declarations, but
 * 0.1.0 declares `exports` as a bare string with no `types` condition, so
 * TypeScript resolves through the exports map and never finds them. Until a
 * release fixes that, the element's shape is mirrored here from the upstream
 * `gate-loader.d.ts`. Swap this for the package's own `GateLoader` type once
 * the suppression in components/demos/loadGateLoader.ts can go.
 *
 * The JSX declaration below is needed either way — the package teaches
 * TypeScript about `HTMLElementTagNameMap`, but nothing teaches JSX about the
 * tag.
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
