import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import BookingIcon from "../../icons/Booking";
import ChatIcon from "../../icons/Chat";
import DocumentsIcon from "../../icons/Documents";
import HomeIcon from "../../icons/Home";

const routes = [
  {
    name: "Home",
    Icon: <HomeIcon />,
  },
  {
    name: "Booking",
    Icon: <BookingIcon />,
  },
  {
    name: "Chat",
    Icon: <ChatIcon />,
  },
  {
    name: "Documents",
    Icon: <DocumentsIcon />,
  }
]

function BottomTabNavigator(props: any): JSX.Element {
  function getIcon(routeName: string, activeIndex: number) {
    if (routeName === "Home") return <HomeIcon disabled={activeIndex !== 0 && activeIndex !== 4} />;
    if (routeName === "Booking") return <BookingIcon disabled={activeIndex !== 1} />;
    if (routeName === "Chat") return <ChatIcon  disabled={activeIndex !== 2} />;
    if (routeName === "Documments") return <DocumentsIcon disabled={activeIndex !== 3} />;
  }

  return (
    <View style={styles.container}>
      {props.state.routeNames.map((route: string, i: number) => (
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
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#F2F2F2",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabButton: {
    height: 77,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default BottomTabNavigator;
