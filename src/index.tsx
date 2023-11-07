import React from 'react';
import Signin from './views/Signin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from './views/Home';
import DiscoverView from './views/Discover';
import BookingView from './views/Booking';
import ChatView from './views/Chat';
import DocumentsView from './views/Documents';
import BottomTabNavigator from './components/BottomTabNavigator';
import ProfileView from './views/Profile';

const Tab = createBottomTabNavigator();

function Application(): JSX.Element {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabNavigator {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Discover" component={DiscoverView} />
      <Tab.Screen name="Booking" component={BookingView} />
      <Tab.Screen name="Chat" component={ChatView} />
      <Tab.Screen name="Documments" component={DocumentsView} />
      <Tab.Screen name="Profile" component={ProfileView} />
      <Tab.Screen name="Signin" component={Signin} />
    </Tab.Navigator>
  );
}

export default Application;
