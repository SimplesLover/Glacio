import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaInicial from '../screens/TelaInicial'
import TelaConsultaModelos from '../screens/TelaConsultaModelos'
import TelaDetalheModelo from '../screens/TelaDetalheModelo'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TelaInicial" component={TelaInicial} />
      <Stack.Screen name="TelaConsultaModelos" component={TelaConsultaModelos} />
      <Stack.Screen name="TelaDetalheModelo" component={TelaDetalheModelo} />
    </Stack.Navigator>
  )
}