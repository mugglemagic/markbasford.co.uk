import type { ComponentType } from 'react'
import { GateLoaderDemo } from './GateLoaderDemo'

/**
 * Maps a project's `demo` frontmatter key to the component that renders it.
 * Projects without an entry here simply render no demo.
 */
export const demos: Record<string, ComponentType> = {
  'stargate-loader': GateLoaderDemo,
}

export function getDemo(key: string | undefined): ComponentType | null {
  if (!key) return null
  return demos[key] ?? null
}
