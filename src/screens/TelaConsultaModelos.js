import React, { useMemo, useState } from 'react'
import { View, FlatList, useWindowDimensions, TextInput, TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native'
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
  const [filters, setFilters] = useState({ marcas: [], tipo: [], voltagem: [], consumo: [], capacidade: [], classeEnergetica: [] })
  const { width } = useWindowDimensions()
  const gap = wp(2)
  const itemWidth = (width - gap * (2 + 1)) / 2
  const marca = route.params?.marca
  const allOptions = useMemo(() => {
    const marcas = Array.from(new Set(MODELOS.map(m => m.marca)))
    const tipo = Array.from(new Set(MODELOS.map(m => m.tipo)))
    const voltagem = Array.from(new Set(MODELOS.map(m => m.especificacoes.voltagem)))
    const consumo = Array.from(new Set(MODELOS.map(m => m.especificacoes.consumo)))
    const capacidade = Array.from(new Set(MODELOS.map(m => m.especificacoes.capacidade).filter(Boolean)))
    const classeEnergetica = Array.from(new Set(MODELOS.map(m => m.especificacoes.classeEnergetica).filter(Boolean)))
    return { marcas, tipo, voltagem, consumo, capacidade, classeEnergetica }
  }, [])
  const data = useMemo(() => {
    let base = marca ? MODELOS.filter(m => m.marca === marca) : MODELOS
    const f = filters
    base = base.filter(m => {
      const okMarca = !f.marcas.length || f.marcas.includes(m.marca)
      const okTipo = !f.tipo.length || f.tipo.includes(m.tipo)
      const okVolt = !f.voltagem.length || f.voltagem.includes(m.especificacoes.voltagem)
      const okCons = !f.consumo.length || f.consumo.includes(m.especificacoes.consumo)
      const okCap = !f.capacidade.length || f.capacidade.includes(m.especificacoes.capacidade)
      const okClasse = !f.classeEnergetica.length || f.classeEnergetica.includes(m.especificacoes.classeEnergetica)
      return okMarca && okTipo && okVolt && okCons && okCap && okClasse
    })
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
  }, [marca, q, filters])
  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        showBack
        title="Consultar Modelos"
        subtitle="Pesquise, filtre e encontre o modelo ideal mais próximo"
        onBackPress={() => nav.goBack()}
        bgColor={'#6a9eda'}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 12, borderRadius: 24, height: hp(5.2), backgroundColor: '#0f172a' }}>
            <Ionicons name="search" size={fs(16)} color={'#cbd5e1'} />
            <TextInput style={{ flex: 1, fontSize: fs(14), color: '#e2e8f0' }} placeholder="Buscar por nome/código/marca" placeholderTextColor={'#94a3b8'} value={q} onChangeText={setQ} />
            <TouchableOpacity onPress={() => setShowFilters(v => !v)} style={{ padding: 10 }}>
              <Ionicons name="filter" size={fs(18)} color={'#cbd5e1'} />
            </TouchableOpacity>
          </View>
        </View>
      </AppHeader>
      <View style={{ height: hp(1.5) }} />
      {showFilters && (
        <>
          <Pressable style={[StyleSheet.absoluteFillObject, { zIndex: 9 }]} onPress={() => setShowFilters(false)} />
          <View style={{ marginHorizontal: gap, marginTop: gap, borderWidth: 1, borderRadius: 12, padding: gap, backgroundColor: '#fff', borderColor: '#e6e6e6', zIndex: 10, elevation: 4 }}>
            {Object.entries(allOptions).map(([key, opts]) => (
              <View key={key} style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: fs(13), marginBottom: 6 }}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                  {opts.map(v => {
                    const selected = filters[key]?.includes(v)
                    return (
                      <TouchableOpacity key={v} onPress={() => {
                        const arr = filters[key] || []
                        const next = selected ? arr.filter(x => x !== v) : [...arr, v]
                        setFilters({ ...filters, [key]: next })
                      }} style={{ paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, borderWidth: 1, borderColor: selected ? '#6a9eda' : '#ccc', backgroundColor: selected ? '#e6f0ff' : '#fff' }}>
                        <Text style={{ fontSize: fs(12) }}>{v}</Text>
                      </TouchableOpacity>
                    )
                  })}
                </View>
              </View>
            ))}
            
          </View>
        </>
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