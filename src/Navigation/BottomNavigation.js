//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//Packages
//Context
//Constants
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Components
//Screens
import {Home} from '../Screens/Home/Home';
//Icons
//Images
//Data
//Styles
const Stack = createNativeStackNavigator();

export const BottomNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  content: {},
});
