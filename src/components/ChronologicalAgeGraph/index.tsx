import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Gauge from "../../icons/Gauge";
import { toDp } from "../../utils/sizes";

function ChronologicalAgeGraph(): JSX.Element {
  return (
    <View style={styles.graphContainer}>
      <View style={styles.gaugeContainer}>
        <View style={styles.slidesIconsContainer}>
          <View style={[styles.slideIcon, { backgroundColor: "#5137BD" }]} />
          <View style={[styles.slideIcon, { backgroundColor: "#D9D9D9" }]} />
        </View>
        <Gauge percentages={[21, 36]} />
      </View>
      <View style={styles.innerAgeContainer}>
        <Text style={styles.innerAgeNumber}>36</Text>
        <Text style={styles.innerAgeLabel}>Your Inner Age</Text>
      </View>
      <View style={styles.labelsContainer}>
        <Text style={styles.gaugeLabel}>Younger</Text>
        <Text style={styles.gaugeLabel}>Older</Text>
      </View>
      <View style={styles.ageContainer}>
        <Text style={styles.ageLabel}>46</Text>
        <Text style={styles.ageDisclaimer}>Chronological age</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gaugeContainer: {
    width: "100%",
    height: 210,
    paddingTop: 62,
    alignItems: "center",
    overflow:"hidden",
    position: "relative",
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    marginTop: 20,
  },
  slidesIconsContainer: {
    position: "absolute",
    width: "100%",
    height: 30,
    top: 15,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  slideIcon: {
    width: 9,
    height: 9,
    borderRadius: 9,
  },
  gaugeLabel: {
    color: "#A8A8A8",
    fontSize: 12,
  },
  innerAgeContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 115,
    width: "100%",
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  innerAgeNumber: {
    color: "#5BA87A",
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 10,
    fontFamily: "TestCalibre-Medium"
  },
  innerAgeLabel: {
    color: "#5BA87A",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "TestCalibre-Medium"
  },
  graphContainer: {
    backgroundColor: "white",
    height: 379,
    borderRadius: 28,
    elevation: 20,
    shadowColor: "rgba(0, 0, 0, 0.15)",
  },
  ageContainer: {
    marginTop: 30,
  },
  ageLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontFamily: "Manrope-Regular"
  },
  ageDisclaimer: {
    fontSize: toDp(16),
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
    fontFamily: "TestCalibre-Medium"
  },
});

export default ChronologicalAgeGraph;
