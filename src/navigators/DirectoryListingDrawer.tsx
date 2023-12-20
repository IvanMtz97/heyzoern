import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DirectoryListing from "../views/DirectoryListing";
import DrawerContent from "../components/Drawer";

const Drawer = createDrawerNavigator();

function DirectoryListingNavigator({ route }: any) {
  console.log("DLN", route);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "100%",
        }
      }}
      drawerContent={(props: any) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="DirectoryListing">
        {(props: any) => <DirectoryListing {...props} route={{ ...props.route, params: route.params }} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default DirectoryListingNavigator;
