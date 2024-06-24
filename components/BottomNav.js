// src/components/BottomNav.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomNav = () => {
  return (
    <View style={styles.bottomNav}>
      <Icon name="home" size={30} color="#FF6347" />
      {/* <Icon name="sunny" size={30} color="#ccc" /> */}
      <Icon name="person" size={30} color="#ccc" />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default BottomNav;
