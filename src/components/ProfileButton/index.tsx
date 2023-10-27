import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function ProfileButton({ onPress }: any): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress} style={styles.profileButton}>
      <Text style={styles.text}>MD</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  profileButton: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: "#B1C3FA",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#213B8C",
    fontSize: 15,
    lineHeight: 22.5,
    fontWeight: "bold",
  },
});

export default ProfileButton;
