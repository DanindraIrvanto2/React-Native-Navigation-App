import React, { useMemo } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    title: 'Laptop Gaming',
    price: 'Rp 15.000.000',
  },
  {
    id: 2,
    title: 'iPhone',
    price: 'Rp 18.500.000',
  },
  {
    id: 3,
    title: 'Mechanical Keyboard',
    price: 'Rp 950.000',
  },
];

export default function HomeScreen({ navigation }) {
  const productData = useMemo(() => products, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Produk Pilihan</Text>
        <FlatList
          data={productData}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <ProductCard
              item={item}
              onPress={() =>
                navigation.navigate('Detail', {
                  product: item,
                })
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
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
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 24,
  },
});
