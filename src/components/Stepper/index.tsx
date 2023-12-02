import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

type StepperProps = {
  style?: any;
  steps: number;
  progress: number;
}

function StepCircle(props: any) {
  return (
    <View
      style={[
        styles.circleContainer,
        props.active ? styles.filledCircle : styles.unfilledCircle,
      ]}
    />
  );
}

function Stepper(props: StepperProps) {
  const circles = Array.from({ length: props.steps }, (_, i) => i + 1);
  const width = props.progress + "%";
  const maximumFilled = circles.length * (props.progress / 100);

  return (
    <View style={styles.stepperContainer}>
      <View style={[styles.container, props.style]}>
        {circles.map((c) => (
          <StepCircle
            key={c}
            active={c <= maximumFilled}
          />
        ))}
      </View>
      <View style={styles.unfilledLine} />
      <View style={[styles.filledLine, { width }]} />
    </View>
  )
};

const styles = StyleSheet.create({
  stepperContainer: {
    height: 14,
    width: "100%",
    position: "relative",
  },
  unfilledLine: {
    width: "100%",
    height: 4,
    backgroundColor: "#BDBDBD",
    borderRadius: 5,
    zIndex: 1,
    position: "absolute",
    top: 4,
  },
  filledLine: {
    height: 4,
    borderRadius: 5,
    zIndex: 2,
    position: "absolute",
    backgroundColor: "#5837E8",
    top: 4,
  },
  container: {
    flexDirection: "row",
    height: 14,
    width: "100%",
    position: "absolute",
    justifyContent: "space-around",
    zIndex: 3,
  },
  circleContainer: {
    width: 14,
    height: 14,
    borderRadius: 14,
    position: "relative",
  },
  filledCircle: {
    backgroundColor: "#5837E8",
  },
  unfilledCircle: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#BDBDBD",
  },
});

export default Stepper;
