import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getColors } from '../constants/theme'

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    ;(async () => {
      try {
        const saved = await AsyncStorage.getItem('theme')
        if (saved) setTheme(saved)
      } catch (e) {}
    })()
  }, [])

  const toggleTheme = useCallback(async () => {
    try {
      const next = theme === 'light' ? 'dark' : 'light'
      setTheme(next)
      await AsyncStorage.setItem('theme', next)
    } catch (e) {}
  }, [theme])

  const value = useMemo(() => {
    const colors = getColors(theme)
    return { theme, colors, toggleTheme, isDark: theme === 'dark' }
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider')
  return ctx
}