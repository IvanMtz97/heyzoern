import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import DropIcon from "../../icons/Drop";
import ProbeIcon from "../../icons/Probe";
import DotsIcon from "../../icons/Dots";

const data = [
  {
    name: "Potassium",
    indicator: "4.2 mmol/L",
    icon: "probe",
  },
  {
    name: "Sodium",
    indicator: "141 mmol/L",
    icon: "dots",
  },
  {
    name: "White blood cells",
    indicator: "5.7 thous",
    icon: "drop",
  },
  {
    name: "Potassium",
    indicator: "4.2 mmol/L",
    icon: "probe",
  },
  {
    name: "Sodium",
    indicator: "141 mmol/L",
    icon: "dots",
  },
];

function OptimizedBiomarkers(): JSX.Element {
  function getIcon(name: string) {
    if (name === "probe") return <ProbeIcon />;
    if (name === "dots") return <DotsIcon />;
    if (name === "drop") return <DropIcon />;
    
    return <DropIcon />
  }

  return (
    <View style={styles.biomarkersContainer}>
      <View style={styles.labelsContainer}>
        <Text style={styles.title}>Optimized biomarkers</Text>
        <Text style={styles.subtitle}>You have already optimized these biomarkers.{"\n"}Keep up the good work.</Text>
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
    backgroundColor: "#74DF9F",
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

export default OptimizedBiomarkers;
