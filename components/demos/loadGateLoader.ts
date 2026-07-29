const SCRIPT_SRC = '/vendor/gate-loader/gate-loader.js'
const LOAD_TIMEOUT_MS = 10_000

let loadPromise: Promise<void> | null = null

/**
 * Loads the vendored `gate-loader` module and resolves once the custom
 * element is defined. Cached, so several demos on one page share a request.
 *
 * `whenDefined` never settles if the module fails to evaluate, hence the
 * timeout — a stuck spinner is worse than an honest error.
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

    const script = document.createElement('script')
    script.type = 'module'
    script.src = SCRIPT_SRC
    script.addEventListener('error', () => {
      clearTimeout(timeout)
      reject(new Error(`Failed to load ${SCRIPT_SRC}`))
    })
    document.head.appendChild(script)
  })

  return loadPromise
}
