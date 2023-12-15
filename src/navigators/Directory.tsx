import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Directory from "../views/Directory";
import DirectoryListing from "../views/DirectoryListing";

const Stack = createStackNavigator();

function BookingNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="DirectoryHome" component={Directory} />
      <Stack.Screen name="DirectoryListing" component={DirectoryListing} />
    </Stack.Navigator>
  );
}

export default BookingNavigator;
