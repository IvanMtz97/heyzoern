import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Gauge from "../../icons/Gauge";

function ChronologicalAgeGraph(): JSX.Element {
  return (
    <View style={styles.graphContainer}>
      <View style={styles.gaugeContainer}>
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
    height: 200,
    paddingTop: 42,
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
  },
  innerAgeLabel: {
    color: "#5BA87A",
    fontSize: 14,
    fontWeight: "600",
  },
  graphContainer: {
    backgroundColor: "white",
    height: 349,
    borderRadius: 28,
    elevation: 2,
  },
  ageContainer: {
    marginTop: 15,
  },
  ageLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  ageDisclaimer: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
  },
});

export default ChronologicalAgeGraph;
