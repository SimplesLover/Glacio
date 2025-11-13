import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

export default function SpecGraph({ capacity, power }) {
  console.assert(typeof capacity === 'number');
  console.assert(typeof power === 'number');
  const capPct = Math.min(1, Math.max(0, capacity / 1000));
  const powPct = Math.min(1, Math.max(0, power / 1100));
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Gráfico de Especificações</Text>
      <Bar label={`Capacidade ${capacity}L`} pct={capPct} color="#0066CC" />
      <Bar label={`Potência ${power}W`} pct={powPct} color="#003D7A" />
    </View>
  );
}

function Bar({ label, pct, color }) {
  console.assert(typeof label === 'string');
  console.assert(typeof pct === 'number');
  return (
    <View style={{ marginVertical: 6 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.barBg}>
        <View style={[styles.barFill, { width: `${Math.round(pct * 100)}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { backgroundColor: '#fff', borderRadius: 12, padding: 12, marginTop: 12 },
  title: { fontWeight: '700', color: '#003D7A', marginBottom: 8 },
  label: { fontSize: 12, color: '#333', marginBottom: 4 },
  barBg: { height: 10, borderRadius: 10, backgroundColor: '#e8f0fe', overflow: 'hidden' },
  barFill: { height: 10 },
});
