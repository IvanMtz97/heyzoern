import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import ProfileButton from "../components/ProfileButton";
import GradientText from "../components/GradientText";
import SearchInput from "../components/SearchInput";
import ChronologicalAgeGraph from "../components/ChronologicalAgeGraph";
import ConnectHealthApp from "../components/ConnectHealthApp";
import OptimizedBiomarkers from "../components/OptimizedBiomarkers";
import PendingBiomarkers from "../components/PendingBiomarkers";

function HomeView(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView style={styles.viewContainer}>
        <View style={styles.welcomeContainer}>
          <GradientText colors={["#6243e9", "#392685", "#392685"]} style={styles.welcomeTitle}>Hey, Matthew</GradientText>
          <ProfileButton />
        </View>
        <View style={styles.searchContainer}>
          <SearchInput />
        </View>
        <View style={styles.graphContainer}>
          <ChronologicalAgeGraph />
        </View>
        <View style={styles.connectContainer}>
          <ConnectHealthApp />
        </View>
        <OptimizedBiomarkers />
        <PendingBiomarkers />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#faf9f7",
    height: "100%",
  },
  welcomeContainer: {
    marginTop: 30,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  welcomeTitle: {
    color: "#6243e9", // #392685
    fontSize: 28,
    fontWeight: "bold",
  },
  searchContainer: {
    marginTop: 22,
    paddingHorizontal: 16,
  },
  graphContainer: {
    height: 355,
    paddingHorizontal: 16,
    marginTop: 30,
  },
  connectContainer: {
    paddingHorizontal: 16,
    marginTop: 22,
  },
});

export default HomeView;
