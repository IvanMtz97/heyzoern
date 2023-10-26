import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function ChronologicalAgeGraph(): JSX.Element {
  return (
    <View style={styles.graphContainer}>
      <AnimatedCircularProgress
        size={200}
        width={15}
        fill={100}
        arcSweepAngle={180}
        rotation={270}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        lineCap="round"
        backgroundColor="#3d5875" />
      <View style={styles.ageContainer}>
        <Text style={styles.ageLabel}>46</Text>
        <Text style={styles.ageDisclaimer}>Chronological age</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    backgroundColor: "white",
    height: 349,
    borderRadius: 28,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ageContainer: {

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
