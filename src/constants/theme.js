import { Dimensions, PixelRatio } from 'react-native'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export const wp = p => (SCREEN_WIDTH * p) / 100
export const hp = p => (SCREEN_HEIGHT * p) / 100
export const fs = size => Math.round(PixelRatio.roundToNearestPixel(size))

export const lightColors = {
  primaryDark: '#5086c1',
  primary: '#6a9eda',
  primaryLight: '#84b6f4',
  secondary: '#b2dafa',
  tertiary: '#dcffff',
  background: '#ffffff',
  card: '#ffffff',
  text: '#333333',
  textSecondary: '#666666',
  border: '#e6e6e6',
  highlight: '#84b6f4'
}

export const darkColors = {
  background: '#1a1a1a',
  backgroundSecondary: '#2d2d2d',
  card: '#3a3a3a',
  primary: '#6a9eda',
  highlight: '#84b6f4',
  text: '#f5f5f5',
  textSecondary: '#b0b0b0',
  border: '#4a4a4a'
}

export const getColors = theme => (theme === 'dark' ? darkColors : lightColors)