import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BOOKING_STATUS_LABELS, BookingStatus } from '@pet-walk/common';

export default function App() {
  const currentStatus = BookingStatus.IN_PROGRESS;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado del Paseo:</Text>
      <Text style={styles.status}>{BOOKING_STATUS_LABELS[currentStatus]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    color: '#2e7d32',
    marginTop: 8,
  },
});
