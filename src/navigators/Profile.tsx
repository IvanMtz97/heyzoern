import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileView from "../views/Profile";
import QrView from "../views/Qr";
import PaymentMethod from "../views/PaymentMethod";
import AmexPaymentMethod from "../views/AmexPaymentMethod";

const Stack = createStackNavigator();

function ProfileNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Details" component={ProfileView} />
      <Stack.Screen name="Qr" component={QrView} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="AmexPaymentMethod" component={AmexPaymentMethod} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
