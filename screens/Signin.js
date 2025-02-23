import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('LandingPage')}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#6fba94"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#6fba94"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.newHereText}>New here?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}> Create an account.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef0ee',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 10, 
  },
  title: {
    color: '#292f33',
    fontSize: 35,
    fontWeight: 'semibold',
    fontFamily: 'Nunito-Bold',
    marginBottom: 40, 
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#6fba94',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20, 
    backgroundColor: 'transparent',
    color: '#292f33',
    fontFamily: 'Nunito',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#6fba94',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20, 
  },
  newHereText: {
    color: '#292f33',
    fontSize: 16,
    fontFamily: 'Nunito',
  },
  signupText: {
    color: '#6fba94',
    fontSize: 16,
    fontFamily: 'Nunito',
  },
});