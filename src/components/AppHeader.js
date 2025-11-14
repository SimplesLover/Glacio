import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useThemeContext } from '../contexts/ThemeContext'
import { wp, hp, fs } from '../constants/theme'

export default function AppHeader({ title = 'Pollar', showBack = false, onBackPress }) {
  const { colors, toggleTheme, isDark } = useThemeContext()
  return (
    <View style={[styles.container, { backgroundColor: colors.primary || colors.card }] }>
      <View style={styles.left}>
        {showBack ? (
          <TouchableOpacity onPress={onBackPress} style={styles.iconBtn}>
            <Ionicons name="arrow-back" size={fs(22)} color="#fff" />
          </TouchableOpacity>
        ) : <View style={styles.iconSpacer} />}
      </View>
      <Text style={[styles.title, { color: '#fff' }]}>{title}</Text>
      <TouchableOpacity accessibilityRole="button" onPress={toggleTheme} style={styles.button}>
        <Ionicons name={isDark ? 'sunny' : 'moon'} size={fs(22)} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { height: hp(9), paddingHorizontal: wp(4), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' },
  left: { width: wp(10), alignItems: 'flex-start', justifyContent: 'center' },
  title: {
    fontSize: fs(20),
    fontWeight: '600'
  },
  button: {
    padding: 8,
    borderRadius: 24
  },
  iconBtn: { padding: 8 },
  iconSpacer: { width: fs(22) }
})
