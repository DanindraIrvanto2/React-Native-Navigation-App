import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function DetailScreen() {
  const route = useRoute();
  const product = route.params?.product;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.label}>ID Produk</Text>
          <Text style={styles.value}>{product?.id ?? '-'}</Text>

          <Text style={styles.label}>Nama Produk</Text>
          <Text style={styles.value}>{product?.title ?? 'Produk tidak tersedia'}</Text>

          <Text style={styles.label}>Harga Produk</Text>
          <Text style={styles.value}>{product?.price ?? '-'}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
    marginTop: 12,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },
});
