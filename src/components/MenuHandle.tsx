import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  withoutHandle?: boolean;
}

function MenuHandle(props: Props) {
  return (
    <View style={styles.container}>
      {!props.withoutHandle && <View style={styles.line} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  line: {
    width: 56,
    height: 4,
    backgroundColor: "#ECECEC",
    borderRadius: 100,
  },
});

export default MenuHandle;
