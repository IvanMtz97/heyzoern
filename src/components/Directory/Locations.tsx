import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

function Locations() {
  return (
    <View style={styles.locationsContainer}>
      <View style={styles.locationsTitleContainer}>
        <Text style={styles.locationsTitle}>My locations</Text>
      </View>
      <ScrollView
        style={styles.locationsScrollContainer}
        contentContainerStyle={styles.locationsScrollContentContainer}
        horizontal
      >
          
          <TouchableOpacity style={styles.locationContainer}>
            <Image
              style={styles.locationImage}
              resizeMode="contain"
              source={require("../../assets/coloradosportsdoctor.png")}
            />
            <Text style={styles.locationText}>Colorado Sports Doctor</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.locationContainer}>
            <Image
              style={styles.locationImage}
              resizeMode="contain"
              source={require("../../assets/coloradosportsdoctor.png")}
            />
            <Text style={styles.locationText}>Colorado Sports Doctor</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.locationContainer}>
            <Image
              style={styles.locationImage}
              resizeMode="contain"
              source={require("../../assets/coloradosportsdoctor.png")}
            />
            <Text style={styles.locationText}>Colorado Sports Doctor</Text>
          </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  locationsContainer: {
    width: "100%",
    height: 160,
    backgroundColor: "white",
    marginBottom: 40,
  },
  locationsTitleContainer: {
    width: "100%",
    paddingHorizontal: 25,
    marginTop: 20,
    marginBottom: 15,
  },
  locationsTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "TestCalibre-Medium"
  },
  locationsScrollContainer: {
    flex: 1,
  },
  locationsScrollContentContainer: {
    paddingHorizontal: 16,
  },
  locationContainer: {
    width: 243,
    height: 94,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EAE6DE",
    backgroundColor: "#FEFAF6",
    marginRight: 17,
    paddingVertical: 17,
    paddingHorizontal: 27,
  },
  locationImage: {
    width: 141,
    height: 26,
  },
  locationText: {
    color: "black",
    marginTop: 7,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "TestCalibre-Medium",
  },
});

export default Locations;
