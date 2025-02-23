import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>We're Here to Help</Text>
      <Text style={styles.description}>
        Mindful Map is a daily mood and activity tracking system designed to help you understand the connection between your emotions and daily routines.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6fba94',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Nunito',
    textAlign: 'center',
  },
});