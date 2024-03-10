//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
//Packages
//Context
//Constants
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Components
//Screens
import {Login} from '../Screens/Auth/Login';
import {SignUp} from '../Screens/Auth/SignUp';
//Icons
//Images
//Data
//Styles
const Stack = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
