import React, { useEffect } from 'react';
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import DiscoverView from '../views/Discover';
import ChatNavigator from './Chat';
import DocumentsView from '../views/Documents';
import BottomTabNavigator from '../components/BottomTabNavigator';
import ProfileNavigator from './Profile';
import BookingNavigator from './Booking';
import HomeNavigator from './Home';
import Directory from './Directory';
import SanityProvider from '../providers/SanityProvider';

const Tab = createBottomTabNavigator();

function Application(): JSX.Element {
  useEffect(() => {
    SystemNavigationBar.setBarMode("light");
  }, []);

  return (
    <SanityProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor={"transparent"}
          />
          <Tab.Navigator
            tabBar={props => <BottomTabNavigator {...props} />}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Directory" component={Directory} />
            <Tab.Screen name="Discover" component={DiscoverView} />
            <Tab.Screen name="Booking" component={BookingNavigator} />
            <Tab.Screen name="Chat" component={ChatNavigator} />
            <Tab.Screen name="Documments" component={DocumentsView} />
            <Tab.Screen name="Profile" component={ProfileNavigator} />
          </Tab.Navigator>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SanityProvider>
  );
}

export default Application;
