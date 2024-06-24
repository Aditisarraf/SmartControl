// src/components/DeviceCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const DeviceCard = ({ title, location, status, onPowerPress }) => {

  
  const handlePowerPress = async () => {
    try {
      await axios.post('http://192.168.1.44:3000/toggle');
      onPowerPress(); // Update the status in the parent component after successful toggle
    } catch (error) {
      console.error('Error toggling device state:', error);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <TouchableOpacity onPress={handlePowerPress}>
          <Icon name="power" size={30} color={status === 'Online' ? '#4CAF50' : '#F44336'} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{location} | {status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '45%',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardHeader: {
    alignItems: 'center',
    marginBottom: 10,
  },
  cardBody: {
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#777',
  },
});

export default DeviceCard;
