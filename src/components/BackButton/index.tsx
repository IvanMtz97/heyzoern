import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import ArrowLeft from "../../icons/ArrowLeft";
import { toDp } from "../../utils/sizes";

type Props = {
  onPress: () => void;
};

function BackButton(props: Props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
    >
      <View style={styles.buttonContainer}>
        <ArrowLeft />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: toDp(31),
    height: toDp(45),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: toDp(31),
    height: toDp(31),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: toDp(100),
  },
});

export default BackButton;
