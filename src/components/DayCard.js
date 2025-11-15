import React, { useMemo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useThemeContext } from '../contexts/ThemeContext'
import { FRASES } from '../data/frases'
import { wp, hp, fs } from '../constants/theme'

function formatDate() {
  const d = new Date()
  const locale = 'pt-BR'
  const weekday = d.toLocaleDateString(locale, { weekday: 'long' })
  const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long' })
  const combined = `${weekday.charAt(0).toUpperCase() + weekday.slice(1)}, ${date}`
  return { combined }
}

export default function DayCard() {
  const { colors, isDark } = useThemeContext()
  const { combined } = useMemo(() => formatDate(), [])
  const frase = useMemo(() => FRASES[Math.floor(Math.random() * FRASES.length)], [])
  return (
    <View style={[styles.card, { backgroundColor: colors.card }] }>
      <View style={styles.row}>
        <Ionicons name="calendar-outline" size={fs(16)} color={colors.text} />
        <Text style={[styles.combined, { color: colors.text }]}>{combined}</Text>
      </View>
      <Text style={[styles.phrase, { color: isDark ? colors.textSecondary : colors.primaryDark }]}>{frase}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: wp(2),
    marginTop: hp(2),
    padding: wp(4),
    borderRadius: 12,
    elevation: 2
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  combined: { fontSize: fs(16), fontWeight: '600' },
  phrase: { fontSize: fs(14), marginTop: 8, fontStyle: 'italic' }
})