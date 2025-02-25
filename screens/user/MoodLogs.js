import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MoodLogs({ navigation }) {
  const handleLogout = () => {
    navigation.navigate('Signin');
  };

  const handleNext = () => {
    navigation.navigate('ActivityLogs');
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Icon name="logout" size={30} color="#292f33" />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>How are you feeling today?</Text>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateText}>Today, {formattedDate}</Text>
          <Text style={styles.timeText}>{formattedTime}</Text>
        </View>
        <View style={styles.moodContainer}>
          <View style={styles.moodRow}>
            <TouchableOpacity style={styles.moodItem}>
              <Image source={require('../../assets/relaxed.png')} style={styles.moodIcon} />
              <Text style={styles.moodText}>Relaxed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodItem}>
              <Image source={require('../../assets/happy.png')} style={styles.moodIcon} />
              <Text style={styles.moodText}>Happy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodItem}>
              <Image source={require('../../assets/fine.png')} style={styles.moodIcon} />
              <Text style={styles.moodText}>Fine</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.moodRow}>
            <TouchableOpacity style={styles.moodItem}>
              <Image source={require('../../assets/anxious.png')} style={styles.moodIcon} />
              <Text style={styles.moodText}>Anxious</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodItem}>
              <Image source={require('../../assets/sad.png')} style={styles.moodIcon} />
              <Text style={styles.moodText}>Sad</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodItem}>
              <Image source={require('../../assets/angry.png')} style={styles.moodIcon} />
              <Text style={styles.moodText}>Angry</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef0ee',
    paddingHorizontal: 20,
    paddingTop: 20, 
  },
  logoutButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40, 
  },
  title: {
    textAlign: 'center',
    color: '#292f33',
    fontSize: 37,
    fontFamily: 'Nunito-Bold',
    marginBottom: 10, 
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10, 
  },
  dateText: {
    color: '#292f33',
    fontSize: 13,
    fontFamily: 'Nunito',
  },
  timeText: {
    color: '#292f33',
    fontSize: 13,
    fontFamily: 'Nunito',
  },
  moodContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  moodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10, 
  },
  moodItem: {
    alignItems: 'center',
    flex: 2,
  },
  moodIcon: {
    width: 100,
    height: 100,
  },
  moodText: {
    color: '#292f33',
    fontSize: 15,
    fontFamily: 'Nunito',
    marginTop: 5,
  },
  nextButton: {
    backgroundColor: '#6fba94',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 70, 
    alignSelf: 'center',
    width: '50%',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bolder',
  },
});