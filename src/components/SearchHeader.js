import React from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useThemeContext } from '../contexts/ThemeContext'
import { wp, hp, fs } from '../constants/theme'

export default function SearchHeader({ value, onChangeText, onFilterPress, onBackPress }) {
  const { colors } = useThemeContext()
  return (
    <View style={[styles.container, { backgroundColor: colors.secondary || colors.card }] }>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={onBackPress} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={fs(20)} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>Consultar Modelos</Text>
      </View>
      <View style={[styles.row]}>
        <View style={[styles.inputWrap, { backgroundColor: '#fff' }] }>
          <Ionicons name="search" size={fs(16)} color={colors.textSecondary} />
          <TextInput
            style={styles.input}
            placeholder="Buscar modelo..."
            placeholderTextColor={colors.textSecondary}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
        <TouchableOpacity style={styles.filterBtn} onPress={onFilterPress}>
          <Ionicons name="filter" size={fs(18)} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginHorizontal: wp(4), marginTop: hp(2), padding: wp(3), borderRadius: 12 },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  backBtn: { paddingRight: 8, paddingVertical: 4 },
  title: { fontSize: fs(16), fontWeight: '600', marginBottom: hp(1) },
  row: { flexDirection: 'row', alignItems: 'center' },
  inputWrap: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 10, borderRadius: 8, height: hp(5) },
  input: { flex: 1, fontSize: fs(14) },
  filterBtn: { marginLeft: 8, padding: 10, borderRadius: 8 }
})