import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import View1 from './component/View1';
import { NavigationContainer } from '@react-navigation/native';
import View2 from './component/View2';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={View1} name='view1' />
        <Stack.Screen component={View2} name='view2' />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
