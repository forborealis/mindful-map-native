import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

const WeeklyPrediction = () => {
  const currentDate = "January 02, 2023";
  
  const transactions = [
    {
      id: 1,
      icon: require('../../assets/logo.png'),
      label: 'Sbux: Buy in Dollars',
      company: 'Starbuks'
    },
    {
      id: 2,
      icon: require('../../assets/logo.png'),
      label: 'SPOT: Buy in Dollars',
      company: 'Spotify'
    },
    {
      id: 3,
      icon: require('../../assets/logo.png'),
      label: 'Sbux: Sell in Dollars',
      company: 'Starbuks'
    },
    {
      id: 4,
      icon: require('../../assets/logo.png'),
      label: 'Meta: Sell in Dollars',
      company: 'Meta'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Prediction</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.dateText}>{currentDate}</Text>
        
        {transactions.map(item => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardLeft}>
              <Image source={item.icon} style={styles.icon} />
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{item.label}</Text>
                <Text style={styles.companyText}>{item.company}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 12,
    marginLeft: 4,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  labelContainer: {
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  companyText: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  }
});

export default WeeklyPrediction;