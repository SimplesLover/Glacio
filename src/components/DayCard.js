import React, { useMemo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useThemeContext } from '../contexts/ThemeContext'
import { FRASES } from '../data/frases'
import { wp, hp, fs } from '../constants/theme'

function formatDate() {
  const d = new Date()
  const locale = 'pt-BR'
  const weekday = d.toLocaleDateString(locale, { weekday: 'long' })
  const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
  return { weekday, date }
}

export default function DayCard() {
  const { colors, isDark } = useThemeContext()
  const { weekday, date } = useMemo(() => formatDate(), [])
  const frase = useMemo(() => FRASES[Math.floor(Math.random() * FRASES.length)], [])
  return (
    <View style={[styles.card, { backgroundColor: colors.card }] }>
      <View style={styles.row}>
        <Text style={[styles.weekday, { color: colors.text }]}>{weekday.charAt(0).toUpperCase() + weekday.slice(1)}</Text>
        <Text style={[styles.date, { color: colors.textSecondary }]}>{date}</Text>
      </View>
      <Text style={[styles.phrase, { color: isDark ? colors.textSecondary : colors.primaryDark }]}>{frase}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: wp(4),
    marginTop: hp(2),
    padding: wp(4),
    borderRadius: 12,
    elevation: 2
  },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  weekday: { fontSize: fs(18), fontWeight: '700' },
  date: { fontSize: fs(14) },
  phrase: { fontSize: fs(12), marginTop: 8, fontStyle: 'italic' }
})