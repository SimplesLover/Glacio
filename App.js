import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'
import { ThemeProvider, useThemeContext } from './src/contexts/ThemeContext'
import { FavoritosProvider } from './src/contexts/FavoritosContext'

function Root() {
  const { theme, colors, isDark } = useThemeContext()
  const navTheme = isDark ? DarkTheme : DefaultTheme
  navTheme.colors = { ...navTheme.colors, background: colors.background, text: colors.text }
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