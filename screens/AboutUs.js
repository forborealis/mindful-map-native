import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Animated, ScrollView } from 'react-native';

export default function AboutUs() {
  const fadeAnimGif = useRef(new Animated.Value(0)).current;
  const fadeAnimText = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.timing(fadeAnimGif, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {

      setTimeout(() => {
        Animated.timing(fadeAnimText, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }).start();
      }, 600); 
    });
  }, [fadeAnimGif, fadeAnimText]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.Image
        source={require('../assets/about.gif')}
        style={{ ...styles.image, opacity: fadeAnimGif }}
      />
      <Animated.View style={{ ...styles.textContainer, opacity: fadeAnimText }}>
        <Text style={styles.title}>We're Here to Help</Text>
        <Text style={styles.description}>
          Mindful Map is a daily mood and activity tracking system designed to help you understand
          the connection between your emotions and daily routines. By logging your moods and activities, you can identify patterns that influence your well-being.
        </Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#6fba94',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    color: '#292f33',
    fontWeight: 'semibold',
    fontFamily: 'Nunito-Bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    color: '#292f33',
    fontSize: 19,
    fontFamily: 'Nunito',
    textAlign: 'justify',
  },
});