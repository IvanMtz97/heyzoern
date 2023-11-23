import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookingView from "../views/Booking";

const Stack = createStackNavigator();

function BookingNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="BookingList" component={BookingView} />
    </Stack.Navigator>
  );
}

export default BookingNavigator;
