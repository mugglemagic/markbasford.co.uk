export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
  HIGH_CONTRAST: 'highContrast',
} as const

export type ThemeValue = (typeof Theme)[keyof typeof Theme]

export interface ThemeContextValue {
  theme: ThemeValue
  setTheme: (theme: ThemeValue) => void
  osPreference: 'light' | 'dark'
}

const STORAGE_KEY = 'markbasford-theme'
const COOKIE_KEY = 'theme'

export function getStoredTheme(): ThemeValue | null {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === Theme.LIGHT || stored === Theme.DARK || stored === Theme.HIGH_CONTRAST) {
    return stored
  }
  return null
}

export function saveTheme(theme: ThemeValue): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, theme)
  document.cookie = `${COOKIE_KEY}=${theme};path=/;max-age=31536000;SameSite=Lax`
}

export function getOSPreference(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function listenToOSChanges(callback: (preference: 'light' | 'dark') => void): () => void {
  if (typeof window === 'undefined') return () => {}
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handler = (e: MediaQueryListEvent): void => {
    callback(e.matches ? 'dark' : 'light')
  }
  mediaQuery.addEventListener('change', handler)
  return () => mediaQuery.removeEventListener('change', handler)
}

export function applyThemeToDOM(theme: ThemeValue): void {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.style.colorScheme = theme === Theme.DARK || theme === Theme.HIGH_CONTRAST ? 'dark' : 'light'
}

export function getThemeFromCookie(cookieString?: string): ThemeValue {
  const cookies = cookieString ?? (typeof document !== 'undefined' ? document.cookie : '')
  const match = cookies.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`))
  const value = match?.[1]
  if (value === Theme.LIGHT || value === Theme.DARK || value === Theme.HIGH_CONTRAST) {
    return value
  }
  return Theme.LIGHT
}

export const themeLabels: Record<ThemeValue, string> = {
  [Theme.LIGHT]: 'Light',
  [Theme.DARK]: 'Dark',
  [Theme.HIGH_CONTRAST]: 'High Contrast',
}
