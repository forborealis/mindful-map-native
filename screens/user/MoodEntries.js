import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoodLogs } from '../../redux/actions/moodActions';
import BottomNav from '../../components/BottomNav'; // Import BottomNav

const moodImages = {
  relaxed: require('../../assets/relaxed.png'),
  happy: require('../../assets/happy.png'),
  fine: require('../../assets/fine.png'),
  sad: require('../../assets/sad.png'),
  anxious: require('../../assets/anxious.png'),
  angry: require('../../assets/angry.png'),
};

const activityImages = {
  studying: require('../../assets/studying.png'),
  exam: require('../../assets/exam.png'),
  work: require('../../assets/work.png'),
  reading: require('../../assets/reading.png'),
  gaming: require('../../assets/gaming.png'),
  music: require('../../assets/music.png'),
  movie: require('../../assets/movie.png'),
  relax: require('../../assets/relax.png'),
};

const healthImages = {
  exercise: require('../../assets/exercise.png'),
  run: require('../../assets/run.png'),
  walk: require('../../assets/walk.png'),
  'eat healthy': require('../../assets/eathealthy.png'),
};

const socialImages = {
  family: require('../../assets/family.png'),
  friends: require('../../assets/friends.png'),
  relationship: require('../../assets/relationship.png'),
  colleagues: require('../../assets/colleagues.png'),
  pets: require('../../assets/pets.png'),
};

const sleepImages = {
  'No Sleep': require('../../assets/no-sleep.png'),
  'Poor Sleep': require('../../assets/poor-sleep.png'),
  'Medium Sleep': require('../../assets/medium-sleep.png'),
  'Good Sleep': require('../../assets/good-sleep.png'),
};

export default function MoodEntries({ navigation }) {
  const dispatch = useDispatch();
  const moodLogs = useSelector(state => state.moodLog.moodLogs || []); // Ensure moodLogs is an array
  const userId = useSelector(state => state.auth.user?._id); // Assuming user ID is stored in auth state

  useEffect(() => {
    if (userId) {
      dispatch(fetchMoodLogs(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    console.log('Mood logs:', moodLogs); // Add logging
  }, [moodLogs]);

  const getDayLabel = (dateString) => {
    const logDate = new Date(dateString);
    const today = new Date();
    if (logDate.toDateString() === today.toDateString()) {
      return 'Today';
    }
    return logDate.toLocaleDateString('en-US', { weekday: 'long' });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {moodLogs.length === 0 ? (
          <Text style={styles.noLogsText}>No mood logs available.</Text>
        ) : (
          moodLogs.map((log, index) => (
            <View key={index} style={styles.logContainer}>
              <View style={styles.logHeader}>
                <Image source={moodImages[log.mood.toLowerCase()]} style={styles.moodIcon} />
                <View style={styles.logInfo}>
                  <Text style={styles.logDate}>{getDayLabel(log.date)}, {new Date(log.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</Text>
                  <Text style={styles.logMood}>{log.mood}</Text>
                </View>
              </View>
              <View style={styles.logDetails}>
                <Text style={styles.sectionTitle}>Activities</Text>
                <View style={styles.imageRow}>
                  {log.activities.map((activity, index) => (
                    <View key={index} style={styles.imageWithText}>
                      <Image source={activityImages[activity.toLowerCase()]} style={styles.activityIcon} />
                      <Text style={styles.imageText}>{activity}</Text>
                    </View>
                  ))}
                </View>
                <Text style={styles.sectionTitle}>Health</Text>
                <View style={styles.imageRow}>
                  {log.health.map((health, index) => (
                    <View key={index} style={styles.imageWithText}>
                      <Image source={healthImages[health.toLowerCase()]} style={styles.healthIcon} />
                      <Text style={styles.imageText}>{health}</Text>
                    </View>
                  ))}
                </View>
                <Text style={styles.sectionTitle}>Social</Text>
                <View style={styles.imageRow}>
                  {log.social.map((social, index) => (
                    <View key={index} style={styles.imageWithText}>
                      <Image source={socialImages[social.toLowerCase()]} style={styles.socialIcon} />
                      <Text style={styles.imageText}>{social}</Text>
                    </View>
                  ))}
                </View>
                <Text style={styles.sectionTitle}>Sleep Quality</Text>
                <View style={styles.imageRow}>
                  <View style={styles.imageWithText}>
                    <Image source={sleepImages[log.sleepQuality]} style={styles.sleepIcon} />
                    <Text style={styles.imageText}>{log.sleepQuality}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
      {/* <BottomNav navigation={navigation} />  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef0ee',
    paddingHorizontal: 20,
    paddingTop: 40, // Bring the mood log containers lower on the page
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  logContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  logHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  moodIcon: {
    width: 50,
    height: 50,
    borderRadius: 25, // Make the image circular
    marginRight: 10,
  },
  logInfo: {
    flex: 1,
  },
  logDate: {
    color: '#b1b1b1',
    fontFamily: 'Nunito-Bold', // Use Nunito font
  },
  logMood: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Nunito-Bold', // Use Nunito font
  },
  logDetails: {
    marginTop: 10,
  },
  sectionTitle: {
    color: '#000',
    marginBottom: 5,
    fontFamily: 'Nunito-Bold', // Use Nunito font
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  imageWithText: {
    flexDirection: 'row', // Align text to the right of the image
    alignItems: 'center',
    marginRight: 10,
  },
  activityIcon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  healthIcon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  sleepIcon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  imageText: {
    fontSize: 14, // Make the text a bit bigger
    color: '#b1b1b1',
    fontFamily: 'Nunito', // Use Nunito font
  },
  noLogsText: {
    textAlign: 'center',
    color: '#b1b1b1',
    fontSize: 18,
    marginTop: 20,
    fontFamily: 'Nunito', // Use Nunito font
  },
});