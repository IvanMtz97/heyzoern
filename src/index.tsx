import React, { useEffect } from 'react';
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '@frontegg/react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Signin from './views/Signin';
import HomeView from './views/Home';
import DiscoverView from './views/Discover';
import ChatNavigator from './navigators/Chat';
import DocumentsView from './views/Documents';
import BottomTabNavigator from './components/BottomTabNavigator';
import ProfileView from './views/Profile';
import UnauthorizedView from './views/Unauthorized';
import BookingNavigator from './navigators/Booking';

const Tab = createBottomTabNavigator();

function Application(): JSX.Element {
  const { isAuthenticated, login, logout, initializing, isLoading } = useAuth();

  useEffect(() => {
    // login();
  }, []);

  // if (!isAuthenticated && !initializing && !isLoading) return <UnauthorizedView />;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <Tab.Navigator
          tabBar={props => <BottomTabNavigator {...props} />}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="Home" component={HomeView} />
          <Tab.Screen name="Discover" component={DiscoverView} />
          <Tab.Screen name="Booking" component={BookingNavigator} />
          <Tab.Screen name="Chat" component={ChatNavigator} />
          <Tab.Screen name="Documments" component={DocumentsView} />
          <Tab.Screen name="Profile" component={ProfileView} />
          <Tab.Screen name="Signin" component={Signin} />
        </Tab.Navigator>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default Application;
