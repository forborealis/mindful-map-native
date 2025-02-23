import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function LandingPage({ navigation }) {
  let [fontsLoaded] = useFonts({
    'Nunito': require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#67b88f', '#5aa8af', '#fdffff']}
      style={styles.container}
    >
      <Image source={require('../assets/landing.png')} style={styles.image} />
      <Text style={styles.title}>Unlock a Healthier Mind</Text>
      <Text style={styles.subtitle}>Keep track of your moods every day.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AboutUs')}
      >
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Try Now</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 330,
    height: 340,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'semi-bold',
    marginBottom: 10,
    fontFamily: 'Nunito',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 20,
    fontFamily: 'Nunito',
    textAlign: 'center',
  },
  button: {
    width: 150,
    backgroundColor: '#eef0ee',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'semi-bold',
    fontSize: 18,
    fontFamily: 'Nunito',
    color: '#000',
  },
});