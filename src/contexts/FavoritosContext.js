import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const FavoritosContext = createContext(undefined)

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const saved = await AsyncStorage.getItem('favoritos')
        if (saved) setFavoritos(JSON.parse(saved))
      } catch (e) {}
    })()
  }, [])

  const persist = useCallback(async next => {
    try {
      setFavoritos(next)
      await AsyncStorage.setItem('favoritos', JSON.stringify(next))
    } catch (e) {}
  }, [])

  const isFavorito = useCallback(id => favoritos.includes(id), [favoritos])

  const toggleFavorito = useCallback(
    id => {
      const next = isFavorito(id) ? favoritos.filter(f => f !== id) : [...favoritos, id]
      persist(next)
    },
    [favoritos, isFavorito, persist]
  )

  const limparFavoritos = useCallback(() => persist([]), [persist])

  const toggleFavoritos = toggleFavorito

  const value = useMemo(() => ({ favoritos, isFavorito, toggleFavorito, toggleFavoritos, limparFavoritos }), [favoritos, isFavorito, toggleFavorito, limparFavoritos])

  return <FavoritosContext.Provider value={value}>{children}</FavoritosContext.Provider>
}

export function useFavoritos() {
  const ctx = useContext(FavoritosContext)
  if (!ctx) throw new Error('useFavoritos must be used within FavoritosProvider')
  return ctx
}
