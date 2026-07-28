import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CustomHeader from '../components/CustomHeader';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Produk', headerShown: true }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader
              title="Detail Produk"
              navigation={navigation}
              canGoBack={true}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

