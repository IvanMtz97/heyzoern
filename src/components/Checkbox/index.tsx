import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CheckIcon from "../../icons/Check";

type Props = {
  active?: boolean;
  onPress: () => void;
}

function Checkbox(props: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.active ? styles.active : styles.inactive]}
      onPress={props.onPress}
    >
      {props.active && <CheckIcon color="white" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 22,
    height: 22,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#6243E9",
  },
  inactive: {
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
  },
});

export default Checkbox;
