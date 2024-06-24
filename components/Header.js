// src/components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Akeo</Text>
      <TouchableOpacity style={styles.addButton}>
        <Icon name="add-circle" size={30} color="#FF6347" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
  },
  addButton: {
    justifyContent: 'center',
  },
});

export default Header;
