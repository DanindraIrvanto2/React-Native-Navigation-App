import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';

export default function ProfileScreen({ navigation }) {
  const handleLogout = () => {
    const doLogout = () => {
      navigation?.getParent()?.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      }) || navigation?.navigate('Login');
    };

    if (Platform.OS === 'web') {
      const confirmed = window.confirm('Apakah Anda yakin ingin keluar dari akun?');
      if (confirmed) {
        alert('Logout berhasil!');
        doLogout();
      }
    } else {
      Alert.alert('Konfirmasi Logout', 'Apakah Anda yakin ingin keluar dari akun?', [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            Alert.alert('Informasi', 'Logout berhasil!');
            doLogout();
          },
        },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.name}>Danindra</Text>
        <Text style={styles.email}>danindra@example.com</Text>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    padding: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  email: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
