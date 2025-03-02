import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API_URL } from '@env';

export default function Correlation() {
  const [correlationResults, setCorrelationResults] = useState([]);
  const userId = useSelector(state => state.auth.user?._id); 

  useEffect(() => {
    if (userId) {
      const fetchCorrelationData = async () => {
        try {
          const response = await axios.get(`${API_URL}/correlation?user=${userId}`);
          console.log('Fetched Correlation Data:', response.data);
          setCorrelationResults(response.data);
        } catch (error) {
          console.error('Error fetching correlation data:', error);
        }
      };

      fetchCorrelationData();
    }
  }, [userId]);

  useEffect(() => {
    console.log('Correlation Results:', correlationResults);
  }, [correlationResults]);

  const renderCorrelationResults = () => {
    const moodResults = correlationResults.filter(result => result.correlationMood && result.correlationActivity);
    const socialResults = correlationResults.filter(result => result.correlationSocial);
    const healthResults = correlationResults.filter(result => result.healthStatus);
    const sleepResults = correlationResults.filter(result => result.sleepQuality);

    return (
      <View>
        <Text style={styles.sectionTitle}>Activities</Text>
        {moodResults.map((result, index) => (
          <Text key={index} style={styles.resultText}>
            {result.correlationMood} mood is {result.correlationValue}% linked to {result.correlationActivity}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Social</Text>
        {socialResults.map((result, index) => (
          <Text key={index} style={styles.resultText}>
            {result.correlationMood} mood is {result.correlationValue}% linked to {result.correlationSocial}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Health</Text>
        {healthResults.map((result, index) => (
          <Text key={index} style={styles.resultText}>
            {result.healthStatus}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Sleep Quality</Text>
        {sleepResults.map((result, index) => (
          <Text key={index} style={styles.resultText}>
            {result.sleepQualityValue}% of sleep this week is {result.sleepQuality} 
          </Text>
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Correlation Analysis</Text>
        {correlationResults.length === 1 && correlationResults[0].message ? (
          <Text style={styles.resultText}>{correlationResults[0].message}</Text>
        ) : (
          renderCorrelationResults()
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef0ee',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
  },
  resultText: {
    fontSize: 20,
    color: '#89bcbc',
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});