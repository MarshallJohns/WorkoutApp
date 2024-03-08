/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
//Packages
import {NavigationContainer} from '@react-navigation/native';
//Screens
import {Routes} from './src/Navigation/Routes';

function App() {
  return (
    <SafeAreaView>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
