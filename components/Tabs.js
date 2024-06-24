// src/components/Tabs.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tabs = () => {
  return (
    <View style={styles.tabs}>
      <Text style={styles.tabActive}>All devices</Text>
      {/* <Text style={styles.tabInactive}>Living room</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  tabActive: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabInactive: {
    fontSize: 16,
    color: '#ccc',
  },
});

export default Tabs;
