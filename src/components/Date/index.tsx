import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { toDp } from "../../utils/sizes";

type Props = {
  month: string;
  day: number;
  borderColor: string;
  monthBackgroundColor: string;
  textsColor: string;
  style?: any;
}

function Date(props: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: props.borderColor,
        },
        props.style
      ]}
    >
      <View style={[styles.monthContainer, { backgroundColor: props.monthBackgroundColor, borderBottomColor: props.borderColor }]}>
        <Text style={[styles.monthText, { color: props.textsColor }]}>{props.month}</Text>
      </View>
      <View style={styles.dayContainer}>
        <Text style={[styles.dayText, { color: props.textsColor }]}>{props.day}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: toDp(49),
    height: toDp(53),
    borderRadius: toDp(12),
    borderWidth: toDp(2),
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  monthContainer: {
    width: "100%",
    height: toDp(20),
    borderBottomWidth: toDp(2),
    justifyContent: "center",
    alignItems: "center",
  },
  monthText: {
    fontWeight: "500",
    fontSize: toDp(12),
    lineHeight: toDp(14.24),
  },
  dayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  dayText: {
    fontWeight: "500",
    fontSize: toDp(25),
    lineHeight: toDp(29.68),
  },
});

export default Date;
