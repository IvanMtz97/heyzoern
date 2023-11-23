import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatView from "../views/Chat";
import ChatRoomView from "../views/ChatRoom";
import ChatDetails from "../views/ChatDetails";

const Stack = createStackNavigator();
function ChatNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="ChatRooms" component={ChatView} />
      <Stack.Screen name="ChatRoom" component={ChatRoomView} />
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
    </Stack.Navigator>
  );
}

export default ChatNavigator;
