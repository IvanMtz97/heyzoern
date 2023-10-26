import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import ChevronRightIcon from "../../icons/ChevronRight";

function ConnectHealthApp(): JSX.Element {
  return (
    <TouchableOpacity style={styles.connectContainer}>
      <Image
        style={styles.healthAppImage}
        source={require("../../assets/HealthApp.png")}
      />
      <Text style={styles.label}>Connect Health app for better insight</Text>
      <ChevronRightIcon />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  connectContainer: {
    backgroundColor: "white",
    height: 52,
    borderRadius: 12,
    borderColor: "#EAE6DE",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 13,
    paddingRight: 20,
  },
  healthAppImage: {
    width: 36,
    height: 36,
  },
  label: {
    color: "black",
    fontSize: 12,
    fontWeight: "400",
    marginLeft: 19,
    marginRight: "auto",
  },
});

export default ConnectHealthApp;