import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Directory from "../views/Directory";
import DirectoryListingNavigator from "./DirectoryListingDrawer";

const Stack = createStackNavigator();

function BookingNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="DirectoryHome" component={Directory} />
      <Stack.Screen name="DirectoryListingDrawer" component={DirectoryListingNavigator} />
    </Stack.Navigator>
  );
}

export default BookingNavigator;
