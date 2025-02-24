import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MoodLogs({ navigation }) {
  const handleLogout = () => {
    // Perform any necessary cleanup or session ending logic here

    // Redirect to Signin screen
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Icon name="logout" size={30} color="#292f33" />
      </TouchableOpacity>
      <Text style={styles.text}>Hello World</Text>
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
  logoutButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  text: {
    color: '#292f33',
    fontSize: 24,
    fontFamily: 'Nunito-Bold',
  },
});