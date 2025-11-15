import React, { useEffect } from 'react'
import { StatusBar, Platform } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'
import { ThemeProvider, useThemeContext } from './src/contexts/ThemeContext'
import { FavoritosProvider } from './src/contexts/FavoritosContext'
import * as NavigationBar from 'expo-navigation-bar'

function Root() {
  const { theme, colors, isDark } = useThemeContext()
  const navTheme = isDark ? DarkTheme : DefaultTheme
  navTheme.colors = { ...navTheme.colors, background: colors.background, text: colors.text }
  useEffect(() => {
    ;(async () => {
      try {
        if (Platform.OS === 'android') {
          await NavigationBar.setVisibilityAsync('hidden')
        }
      } catch (e) {}
    })()
    return () => {
      ;(async () => {
        try {
          if (Platform.OS === 'android') {
            await NavigationBar.setVisibilityAsync('visible')
          }
        } catch (e) {}
      })()
    }
  }, [])
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <FavoritosProvider>
        <Root />
      </FavoritosProvider>
    </ThemeProvider>
  )
}