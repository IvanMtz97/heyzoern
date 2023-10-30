import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import BookingIcon from "../../icons/Booking";
import ChatIcon from "../../icons/Chat";
import CompassIcon from "../../icons/Compass";
import DocumentsIcon from "../../icons/Documents";
import HomeIcon from "../../icons/Home";

function BottomTabNavigator(props: any): JSX.Element {
  function getIcon(routeName: string, activeIndex: number) {
    if (routeName === "Home") return <HomeIcon disabled={activeIndex !== 0 && activeIndex !== 5} />;
    if (routeName === "Discover") return <CompassIcon disabled={activeIndex !== 1} />;
    if (routeName === "Booking") return <BookingIcon disabled={activeIndex !== 2} />;
    if (routeName === "Chat") return <ChatIcon  disabled={activeIndex !== 3} />;
    if (routeName === "Documments") return <DocumentsIcon disabled={activeIndex !== 4} />;
  }

  return (
    <View style={styles.container}>
      {props.state.routeNames.filter((route) => route !== "Profile").map((route: string, i: number) => (
        <TouchableOpacity
          key={route + "" + i}
          style={styles.tabButton}
          onPress={() => {
            if (props.state.index !== i) {
              props.navigation.navigate(route);
            }
          }}
        >
          {getIcon(route, props.state.index)}
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 77,
    width: "100%",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#F2F2F2",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabButton: {
    flex: 1,
    height: 77,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomTabNavigator;
