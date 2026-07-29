const LOAD_TIMEOUT_MS = 10_000

let loadPromise: Promise<void> | null = null

/**
 * Imports the `gate-loader` custom element and resolves once it is defined.
 * Cached, so several demos on one page share a single import.
 *
 * The import is dynamic and client-only: the module calls
 * `customElements.define` and `matchMedia` at evaluation time, so it must not
 * run during SSR. `whenDefined` never settles if the module fails to
 * evaluate, hence the timeout — a stuck spinner is worse than an honest error.
 */
export function loadGateLoader(): Promise<void> {
  loadPromise ??= new Promise<void>((resolve, reject) => {
    if (customElements.get('gate-loader')) {
      resolve()
      return
    }

    const timeout = setTimeout(
      () => reject(new Error('gate-loader did not define itself in time')),
      LOAD_TIMEOUT_MS
    )

    customElements.whenDefined('gate-loader').then(() => {
      clearTimeout(timeout)
      resolve()
    })

    // @ts-expect-error @mugglemagic/stargate-loader@0.1.0 declares `exports` as
    // a bare string with no `types` condition, so TypeScript resolves through
    // the exports map and never finds the shipped gate-loader.d.ts (TS7016).
    // Once the package publishes
    //   "exports": { ".": { "types": "./gate-loader.d.ts", "default": "./src/gate-loader.js" } }
    // this suppression starts erroring as unnecessary — delete it then, and
    // point types/gate-loader.d.ts at the package's own GateLoader type.
    import('@mugglemagic/stargate-loader').catch((error: unknown) => {
      clearTimeout(timeout)
      reject(error instanceof Error ? error : new Error(String(error)))
    })
  })

  return loadPromise
}
