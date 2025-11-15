import React, { useMemo, useState } from 'react'
import { View, FlatList, useWindowDimensions, TextInput, TouchableOpacity, Text } from 'react-native'
import AppHeader from '../components/AppHeader'
import ModeloCard from '../components/ModeloCard'
import { MODELOS } from '../data/modelos'
import { useRoute, useNavigation } from '@react-navigation/native'
import { wp, hp, fs } from '../constants/theme'
import { Ionicons } from '@expo/vector-icons'

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
      <AppHeader
        showBack
        title="Consultar Modelos"
        subtitle="Pesquise, filtre e encontre o modelo ideal"
        onBackPress={() => nav.goBack()}
        bgColor={'#6a9eda'}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 12, borderRadius: 24, height: hp(5.2), backgroundColor: '#0f172a' }}>
            <TouchableOpacity onPress={() => setShowFilters(v => !v)}>
              <Ionicons name="filter" size={fs(18)} color={'#cbd5e1'} />
            </TouchableOpacity>
            <Ionicons name="search" size={fs(16)} color={'#cbd5e1'} />
            <TextInput style={{ flex: 1, fontSize: fs(14), color: '#e2e8f0' }} placeholder="Buscar por nome/código/marca" placeholderTextColor={'#94a3b8'} value={q} onChangeText={setQ} />
          </View>
        </View>
      </AppHeader>
      <View style={{ height: hp(1.5) }} />
      {showFilters && (
        <View style={{ marginHorizontal: gap, marginTop: gap, borderWidth: 1, borderRadius: 12, padding: gap }}>
          <View style={{ height: 4 }} />
        </View>
      )}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: gap, paddingTop: hp(1.5), paddingBottom: 24 }}
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