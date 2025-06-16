import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { Text, View, Platform, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MainStackNavigator from "../../navigation/MainNavigator";

export default function App() {
  return (
    <MainStackNavigator/>
  )
}
