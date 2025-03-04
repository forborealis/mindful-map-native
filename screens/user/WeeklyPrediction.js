import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoodLogs } from '../../redux/actions/moodActions';
import moment from 'moment';

// Import mood images from existing moodImages object
const moodImages = {
  Relaxed: require('../../assets/relaxed.png'),
  Happy: require('../../assets/happy.png'),
  Fine: require('../../assets/fine.png'),
  Sad: require('../../assets/sad.png'),
  Anxious: require('../../assets/anxious.png'),
  Angry: require('../../assets/angry.png'),
};

const defaultImage = require('../../assets/logo.png');

const WeeklyPrediction = ({ navigation }) => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user?._id);
  const moodLogs = useSelector(state => state.moodLog.moodLogs || []);
  const [weeklyInsights, setWeeklyInsights] = useState([]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchMoodLogs(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (moodLogs.length > 0) {
      const insights = generateWeeklyInsights(moodLogs);
      setWeeklyInsights(insights);
    }
  }, [moodLogs]);

  const generateWeeklyInsights = (logs) => {
    moment.locale('en', {
      week: {
        dow: 1, // Monday is the first day of the week
      }
    });

    const currentWeekStart = moment().startOf('week');
    const currentWeekEnd = moment().endOf('week');

    // Filter logs from previous week only
    const previousWeekLogs = logs.filter(log => {
      const logDate = moment(log.date);
      const prevWeekStart = moment().subtract(1, 'week').startOf('week');
      const prevWeekEnd = moment().subtract(1, 'week').endOf('week');
      return logDate.isBetween(prevWeekStart, prevWeekEnd, null, '[]');
    });

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (previousWeekLogs.length === 0) {
      return daysOfWeek.map(day => ({
        day,
        mood: null,
        activity: null,
        icon: defaultImage
      }));
    }

    return daysOfWeek.map(day => {
      // Filter logs for specific day of week
      const dayLogs = previousWeekLogs.filter(log => 
        moment(log.date).format('dddd') === day
      );

      if (dayLogs.length === 0) {
        return {
          day,
          mood: null,
          activity: null,
          icon: defaultImage
        };
      }

      const mostCommonMood = getMostCommonMood(dayLogs);
      
      const mostCommonActivity = getMostCommonActivity(dayLogs);

      return {
        day,
        mood: mostCommonMood,
        activity: mostCommonActivity,
        icon: moodImages[mostCommonMood] || defaultImage
      };
    });
  };

  const getMostCommonMood = (logs) => {
    const moodCounts = logs.reduce((acc, log) => {
      acc[log.mood] = (acc[log.mood] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(moodCounts).reduce((a, b) => 
      moodCounts[a] > moodCounts[b] ? a : b, 
      'Fine'
    );
  };

  const getMostCommonActivity = (logs) => {
    const allActivities = logs.flatMap(log => 
      Object.values(log.activities || {}).flat()
    );

    if (allActivities.length === 0) return null;

    const activityCounts = allActivities.reduce((acc, activity) => {
      acc[activity] = (acc[activity] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(activityCounts).reduce((a, b) => 
      activityCounts[a] > activityCounts[b] ? a : b, 
      null
    );
  };

  // Format current week's date range
  const currentWeekStart = moment().startOf('week');
  const currentWeekEnd = moment().endOf('week');
  const weekDateRange = `${currentWeekStart.format('MMM DD')} - ${currentWeekEnd.format('MMM DD YYYY')}`;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.headerTitle}>Weekly Prediction</Text> */}
      </View>
      
      <View style={styles.content}>
        <Text style={styles.dateText}>{weekDateRange}</Text>
        
        {weeklyInsights.map(item => (
          <View key={item.day} style={styles.card}>
            <View style={styles.cardLeft}>
              <Image 
                source={item.mood ? item.icon : defaultImage} 
                style={styles.icon} 
              />
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{item.day}</Text>
                <Text style={styles.companyText}>
                  {item.mood && item.activity 
                    ? `You may feel ${item.mood} due to ${item.activity}`
                    : 'No prediction available'}
                </Text>
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
  // header: {
  //   paddingVertical: 15,
  //   paddingHorizontal: 20,
  //   backgroundColor: 'white',
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#e1e1e1',
  // },
  // headerTitle: {
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   color: '#333',
  // },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    marginLeft: 4,
    fontFamily:'Nunito-Bold'
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
    flex: 1,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    fontFamily:'Nunito-Bold'
  },
  companyText: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
    flexWrap: 'wrap',
    fontFamily:'Nunito'
  }
});

export default WeeklyPrediction;