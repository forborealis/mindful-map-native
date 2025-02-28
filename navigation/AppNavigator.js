import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../screens/LandingPage';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import AboutUs from '../screens/AboutUs';
import MoodLogs from '../screens/user/MoodLogs';
import ActivityLogs from '../screens/user/ActivityLogs';
import MoodEntries from '../screens/user/MoodEntries';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="MoodLogs"
          component={MoodLogs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActivityLogs"
          component={ActivityLogs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoodEntries"
          component={MoodEntries}
          options={{ headerShown: false }}
        />
  </Stack.Navigator>
    </NavigationContainer>
  );
}