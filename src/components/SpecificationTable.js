import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useThemeContext } from '../contexts/ThemeContext'
import { fs, wp } from '../constants/theme'

export default function SpecificationTable({ temperaturas }) {
  const { colors } = useThemeContext()
  const rows = []
  if (temperaturas?.refrigerador) rows.push({ nome: 'Refrigerador', min: temperaturas.refrigerador.min, max: temperaturas.refrigerador.max })
  if (temperaturas?.freezer) rows.push({ nome: 'Freezer', min: temperaturas.freezer.min, max: temperaturas.freezer.max })
  return (
    <View style={[styles.box, { borderColor: colors.border }] }>
      <Text style={[styles.title, { color: colors.text }]}>Faixas de Temperatura</Text>
      {rows.map(r => (
        <View key={r.nome} style={styles.row}>
          <Text style={[styles.cell, { color: colors.text }]}>{r.nome}</Text>
          <Text style={[styles.cell, { color: colors.textSecondary }]}>{r.min}°C a {r.max}°C</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  box: { borderWidth: 1, borderRadius: 12, padding: wp(3) },
  title: { fontSize: fs(16), fontWeight: '600', marginBottom: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  cell: { fontSize: fs(13) }
})