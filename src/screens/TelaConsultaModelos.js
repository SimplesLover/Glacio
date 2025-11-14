import React, { useMemo, useState } from 'react'
import { View, FlatList, useWindowDimensions } from 'react-native'
import AppHeader from '../components/AppHeader'
import SearchHeader from '../components/SearchHeader'
import ModeloCard from '../components/ModeloCard'
import { MODELOS } from '../data/modelos'
import { useRoute, useNavigation } from '@react-navigation/native'
import { wp } from '../constants/theme'

export default function TelaConsultaModelos() {
  const route = useRoute()
  const nav = useNavigation()
  const [q, setQ] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const { width } = useWindowDimensions()
  const gap = wp(2)
  const itemWidth = (width - gap * (2 + 1)) / 2
  const marca = route.params?.marca
  const data = useMemo(() => {
    const base = marca ? MODELOS.filter(m => m.marca === marca) : MODELOS
    if (!q) return base
    const term = q.toLowerCase()
    return base.filter(m => {
      const specs = `${m.especificacoes.voltagem} ${m.especificacoes.consumo} ${m.especificacoes.dimensoes.altura} ${m.especificacoes.dimensoes.largura} ${m.especificacoes.dimensoes.profundidade}`.toLowerCase()
      return (
        m.nome.toLowerCase().includes(term) ||
        m.codigo.toLowerCase().includes(term) ||
        m.tipo.toLowerCase().includes(term) ||
        specs.includes(term)
      )
    })
  }, [marca, q])
  return (
    <View style={{ flex: 1 }}>
      <AppHeader showBack title="Consultar Modelos" onBackPress={() => nav.goBack()} />
      <SearchHeader value={q} onChangeText={setQ} onFilterPress={() => setShowFilters(v => !v)} onBackPress={() => nav.goBack()} />
      {showFilters && (
        <View style={{ marginHorizontal: gap, marginTop: gap, borderWidth: 1, borderRadius: 12, padding: gap }}>
          <View style={{ height: 4 }} />
        </View>
      )}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: gap, paddingBottom: 24 }}
        columnWrapperStyle={{ gap }}
        ItemSeparatorComponent={() => <View style={{ height: gap }} />}
        renderItem={({ item }) => (
          <View style={{ width: itemWidth }}>
            <ModeloCard item={item} onPress={() => nav.navigate('TelaDetalheModelo', { modeloId: item.id })} />
          </View>
        )}
      />
    </View>
  )
}
