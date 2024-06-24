// src/App.js
import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import Tabs from './components/Tabs';
import DeviceCard from './components/DeviceCard';
import BottomNav from './components/BottomNav';

const HomeScreen = () => {
  const [devices, setDevices] = useState([
    { id: 1, title: 'Smart Plug', location: 'Office', status: 'Offline' },
    { id: 2, title: 'Smart Bulb', location: 'Office', status: 'Offline' },
  ]);

  const toggleDeviceStatus = (id) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id
          ? { ...device, status: device.status === 'Online' ? 'Offline' : 'Online' }
          : device
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Tabs />
      <View style={styles.deviceContainer}>
        {devices.map((device) => (
          <DeviceCard
            key={device.id}
            title={device.title}
            location={device.location}
            status={device.status}
            onPowerPress={() => toggleDeviceStatus(device.id)}
          />
        ))}
      </View>
      <BottomNav />
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  deviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
});

export default App;
