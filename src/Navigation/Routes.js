//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//Packages
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Context
//Constants
//Navigation
//Components
//Screens
import {BottomNavigation} from './BottomNavigation';
import {AuthStack} from './AuthStack';
import {Login} from '../Screens/Auth/Login';
import {SignUp} from '../Screens/Auth/SignUp';
//Icons
//Images
//Data
//Styles
const Stack = createNativeStackNavigator();

export const Routes = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <View style={styles.routesView}>
      <NavigationContainer>
        {!signedIn ? <AuthStack /> : <BottomNavigation />}
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  routesView: {
    width: '100%',
    height: '100%',
  },
});
