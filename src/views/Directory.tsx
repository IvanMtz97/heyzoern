import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Locations from "../components/Directory/Locations";
import LocationsList from "../components/Directory/LocationsList";
import Search from "../components/Directory/Search";
import Map from "../icons/Map";

function Directory({ navigation }: any) {
  const handleLocationListPress = useCallback((id: string) => {
    navigation.navigate("DirectoryListingDrawer", { id });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <LocationsList onLocationPress={handleLocationListPress} />
      <View style={styles.mapButtonContainer}>
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapButtonText}>Map</Text>
          <Map />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffdfb",
  },
  mapButtonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
  },
  mapButton: {
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 100,
    width: 119,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  mapButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "TestCalibre-Medium",
    marginRight: 15,
  },
});

export default Directory;
