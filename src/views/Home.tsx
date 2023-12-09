import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import ProfileButton from "../components/ProfileButton";
import GradientText from "../components/GradientText";
import ChronologicalAgeGraph from "../components/ChronologicalAgeGraph";
import ConnectHealthApp from "../components/ConnectHealthApp";
import OptimizedBiomarkers from "../components/OptimizedBiomarkers";
import PendingBiomarkers from "../components/PendingBiomarkers";

function HomeView({ navigation }: any): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.viewContainer}>
        <View style={styles.viewTopContainer}>
          <ImageBackground
            style={styles.topContainer}
            source={require("../assets/searchBackground.png")}
          >
            <View
              style={styles.welcomeContainer}
            >
              <GradientText colors={["#6243e9", "#392685", "#392685"]} style={styles.welcomeTitle}>Hey, Matthew</GradientText>
              <ProfileButton onPress={() => navigation.navigate("Profile")} />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.roundedView} />
        <View style={styles.graphContainer}>
          <ChronologicalAgeGraph />
          <ConnectHealthApp onPress={() => navigation.navigate("BiomarkersForm")} />
        </View>
        <View style={styles.biomarkersContainer}>
          <OptimizedBiomarkers />
          <PendingBiomarkers />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roundedView: {
    height: 30,
    width: "100%",
    backgroundColor: "#faf9f7",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 20,
    position: "relative",
    bottom: 30,
  },
  viewContainer: {
    backgroundColor: "#faf9f7",
    flex: 1,
    paddingTop: 20,
  },
  contentContainer: {
    position: "relative",
  },
  viewTopContainer: {
    height: 150,
  },
  topContainer: {
    flex: 1,
  },
  welcomeContainer: {
    marginTop: 40,
    paddingHorizontal: 26,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  welcomeTitle: {
    color: "#6243e9",
    fontSize: 28,
    fontWeight: "bold",
  },
  graphContainer: {
    backgroundColor: '#FAF9F8',
    paddingTop: 16,
    paddingHorizontal: 16,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    position: "relative",
    bottom: 30,
  },
  biomarkersContainer: {
    marginBottom: 36,
  },
});

export default HomeView;
