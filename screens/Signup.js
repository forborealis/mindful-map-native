import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('LandingPage')}>
        <Image source={require('../assets/logo.png')} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#6fba94"
      />
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
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.signinContainer}>
        <Text style={styles.alreadyText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.signinText}> Go here.</Text>
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
  signinContainer: {
    flexDirection: 'row',
    marginTop: 20, 
  },
  alreadyText: {
    color: '#292f33',
    fontSize: 16,
    fontFamily: 'Nunito',
  },
  signinText: {
    color: '#6fba94',
    fontSize: 16,
    fontFamily: 'Nunito',
  },
});