import React, { useMemo } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from 'react-native'
import { MODELOS } from '../data/modelos'
import { useNavigation } from '@react-navigation/native'
import { useThemeContext } from '../contexts/ThemeContext'
import { wp, fs } from '../constants/theme'

function pickHighlights() {
  const shuffled = [...MODELOS].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(3, shuffled.length))
}

export default function AnuncioCarousel() {
  const { colors } = useThemeContext()
  const nav = useNavigation()
  const items = useMemo(() => pickHighlights(), [])
  const { width } = useWindowDimensions()
  const cols = useMemo(() => (width < 360 ? 2 : width < 720 ? 3 : 4), [width])
  const gap = wp(2)
  const itemSize = (width - gap * (cols + 1)) / cols
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Novidades</Text>
      <FlatList
        horizontal
        data={items}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => nav.navigate('TelaDetalheModelo', { modeloId: item.id })} style={[styles.card, { width: itemSize, height: itemSize, marginLeft: gap, backgroundColor: colors.card, borderColor: colors.border }] }>
            <Image source={{ uri: item.imagem }} style={{ width: '100%', height: '100%' }} />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>{item.nome}</Text>
              <Text style={styles.overlaySub}>{item.codigo}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginTop: hp(2), marginBottom: hp(2) },
  title: { marginHorizontal: wp(2), marginBottom: hp(1), fontSize: fs(16), fontWeight: '600' },
  card: { borderRadius: 12, overflow: 'hidden', position: 'relative', borderWidth: 1 },
  overlay: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: wp(3), backgroundColor: 'rgba(0,0,0,0.35)' },
  overlayText: { color: '#fff', fontSize: fs(14), fontWeight: '700' },
  overlaySub: { color: '#fff', fontSize: fs(12), marginTop: 2 }
})
