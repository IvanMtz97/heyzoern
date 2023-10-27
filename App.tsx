/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import HomeView from './src/views/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookingView from './src/views/Booking';
import ChatView from './src/views/Chat';
import DocumentsView from './src/views/Documents';
import BottomTabNavigator from './src/components/BottomTabNavigator';
import ProfileView from './src/views/Profile';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <BottomTabNavigator {...props} />}
      >
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Booking" component={BookingView} />
        <Tab.Screen name="Chat" component={ChatView} />
        <Tab.Screen name="Documments" component={DocumentsView} />
        <Tab.Screen name="Profile" component={ProfileView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
