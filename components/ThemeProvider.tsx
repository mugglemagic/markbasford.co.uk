'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  Theme,
  type ThemeContextValue,
  type ThemeValue,
  applyThemeToDOM,
  getOSPreference,
  getStoredTheme,
  listenToOSChanges,
  saveTheme,
} from '@/lib/theme'

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
ThemeContext.displayName = 'ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
  serverTheme?: ThemeValue
}

export function ThemeProvider({ children, serverTheme }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeValue>(() => {
    if (typeof window === 'undefined') return serverTheme ?? Theme.LIGHT
    return getStoredTheme() ?? serverTheme ?? Theme.LIGHT
  })

  const [osPreference, setOsPreference] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    return getOSPreference()
  })

  // Apply stored theme before paint to prevent FOUC
  useLayoutEffect(() => {
    const stored = getStoredTheme()
    if (stored) {
      applyThemeToDOM(stored)
      setThemeState(stored)
    } else {
      applyThemeToDOM(theme)
    }
  }, [])

  // Listen for OS preference changes
  useEffect(() => {
    const cleanup = listenToOSChanges(newPref => {
      setOsPreference(newPref)
      // Auto-switch only if no stored preference
      if (!getStoredTheme()) {
        const autoTheme = newPref === 'dark' ? Theme.DARK : Theme.LIGHT
        setThemeState(autoTheme)
        applyThemeToDOM(autoTheme)
      }
    })
    return cleanup
  }, [])

  const setTheme = useCallback((newTheme: ThemeValue) => {
    setThemeState(newTheme)
    saveTheme(newTheme)
    applyThemeToDOM(newTheme)
  }, [])

  const contextValue = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, osPreference }),
    [theme, setTheme, osPreference]
  )

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
