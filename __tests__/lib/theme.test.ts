import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  Theme,
  getStoredTheme,
  saveTheme,
  getOSPreference,
  applyThemeToDOM,
  getThemeFromCookie,
  themeLabels,
} from '@/lib/theme'

describe('theme', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.style.colorScheme = ''
    document.cookie = 'theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  })

  describe('Theme constants', () => {
    it('defines all theme values', () => {
      expect(Theme.LIGHT).toBe('light')
      expect(Theme.DARK).toBe('dark')
      expect(Theme.HIGH_CONTRAST).toBe('highContrast')
    })
  })

  describe('themeLabels', () => {
    it('has labels for all themes', () => {
      expect(themeLabels[Theme.LIGHT]).toBe('Light')
      expect(themeLabels[Theme.DARK]).toBe('Dark')
      expect(themeLabels[Theme.HIGH_CONTRAST]).toBe('High Contrast')
    })
  })

  describe('getStoredTheme / saveTheme', () => {
    it('returns null when nothing stored', () => {
      expect(getStoredTheme()).toBeNull()
    })

    it('saves and retrieves a theme', () => {
      saveTheme(Theme.DARK)
      expect(getStoredTheme()).toBe(Theme.DARK)
    })

    it('saves and retrieves high contrast', () => {
      saveTheme(Theme.HIGH_CONTRAST)
      expect(getStoredTheme()).toBe(Theme.HIGH_CONTRAST)
    })

    it('returns null for invalid stored value', () => {
      localStorage.setItem('markbasford-theme', 'invalid-theme')
      expect(getStoredTheme()).toBeNull()
    })
  })

  describe('getOSPreference', () => {
    it('returns light or dark', () => {
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation((query: string) => ({
          matches: query === '(prefers-color-scheme: dark)',
          media: query,
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
        })),
      })
      const pref = getOSPreference()
      expect(['light', 'dark']).toContain(pref)
    })
  })

  describe('applyThemeToDOM', () => {
    it('sets data-theme attribute', () => {
      applyThemeToDOM(Theme.DARK)
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    })

    it('sets colorScheme to dark for dark theme', () => {
      applyThemeToDOM(Theme.DARK)
      expect(document.documentElement.style.colorScheme).toBe('dark')
    })

    it('sets colorScheme to dark for high contrast', () => {
      applyThemeToDOM(Theme.HIGH_CONTRAST)
      expect(document.documentElement.style.colorScheme).toBe('dark')
    })

    it('sets colorScheme to light for light theme', () => {
      applyThemeToDOM(Theme.LIGHT)
      expect(document.documentElement.style.colorScheme).toBe('light')
    })
  })

  describe('getThemeFromCookie', () => {
    it('returns light as default when no cookie', () => {
      expect(getThemeFromCookie('')).toBe(Theme.LIGHT)
    })

    it('parses theme from cookie string', () => {
      expect(getThemeFromCookie('theme=dark')).toBe(Theme.DARK)
      expect(getThemeFromCookie('other=value; theme=highContrast; another=test')).toBe(
        Theme.HIGH_CONTRAST
      )
    })

    it('returns light for invalid cookie value', () => {
      expect(getThemeFromCookie('theme=invalid')).toBe(Theme.LIGHT)
    })
  })
})
