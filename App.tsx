/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FronteggWrapper } from '@frontegg/react-native';
import Application from './src';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <FronteggWrapper>
      <NavigationContainer>
        <Application />
      </NavigationContainer>
    </FronteggWrapper>
  );
}

export default App;
