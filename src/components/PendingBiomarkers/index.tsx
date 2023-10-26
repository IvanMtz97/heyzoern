import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import DumbellIcon from "../../icons/Dumbell";
import O2Icon from "../../icons/O2";
import FireIcon from "../../icons/Fire";
import SandClockIcon from "../../icons/SandClock";

const data = [
  {
    name: "Free testosterone",
    indicator: "8 ng/dl",
    icon: "dumbell",
  },
  {
    name: "TS",
    indicator: "38%",
    icon: "o2",
  },
  {
    name: "hsCRP",
    indicator: "1.3 mg/L",
    icon: "fire",
  },
  {
    name: "Potassium",
    indicator: "4.2 mmoI/L",
    icon: "sandclock",
  },
];

function PendingBiomarkers(): JSX.Element {
  function getIcon(name: string) {
    if (name === "dumbell") return <DumbellIcon />;
    if (name === "o2") return <O2Icon />;
    if (name === "fire") return <FireIcon />;
    if (name === "sandclock") return <SandClockIcon />;
    
    return <DumbellIcon />
  }

  return (
    <View style={styles.biomarkersContainer}>
      <View style={styles.labelsContainer}>
        <Text style={styles.title}>Biomarkers that need work</Text>
        <Text style={styles.subtitle}>Your body is unique, and so are its needs. Why not{"\n"}book a call with an expert to review your bio markers </Text>
      </View>
      <ScrollView
        horizontal
        style={styles.biomarkersScrollView}
      >
        {data.map((d, i) => (
          <TouchableOpacity key={d.name + "" + i} style={styles.biomarkerContainer}>
            <View style={styles.biomarkerIconContainer}>
              {getIcon(d.icon)}
            </View>
            <View style={styles.biomarkerLabelsContainer}>
              <Text style={styles.biomarkerTitle}>{d.name}</Text>
              <Text style={styles.biomarkerSubtitle}>{d.indicator}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.paddingView}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  biomarkersContainer: {
    marginTop: 33,
    marginBottom: 23,
  },
  labelsContainer: {
    paddingLeft: 16,
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
  },
  subtitle: {
    color: "black",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 10,
  },
  biomarkersScrollView: {
    height: 120,
    paddingHorizontal: 16,
    marginTop: 26,
  },
  paddingView: {
    width: 26,
  },
  biomarkerContainer: {
    width: 100,
    height: 120,
    borderRadius: 20,
    backgroundColor: "white",
    borderColor: "#EAE6DE",
    borderWidth: 1,
    marginRight: 10,
    paddingVertical: 13,
    paddingHorizontal: 14,
  },
  biomarkerIconContainer: {
    width: 37,
    height: 37,
    borderRadius: 10,
    backgroundColor: "#FAE2B9",
    justifyContent: "center",
    alignItems: "center",
  },
  biomarkerLabelsContainer: {
    marginTop: "auto",
  },
  biomarkerTitle: {
    color: "black",
    fontWeight: "600",
    fontSize: 12,
  },
  biomarkerSubtitle: {
    color: "black",
    fontWeight: "400",
    fontSize: 12,
  },
});

export default PendingBiomarkers;
