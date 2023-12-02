import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "../views/Home";
import BiomarkersForm from "../views/BiomarkersForm";

const Stack = createStackNavigator();

function HomeNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="BiomarkersHome" component={HomeView} />
      <Stack.Screen name="BiomarkersForm" component={BiomarkersForm} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
