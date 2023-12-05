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
    <SafeAreaView>
      <ScrollView style={styles.viewContainer}>
        <View style={styles.contentContainer}>
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
          <View style={styles.graphContainer}>
            <ChronologicalAgeGraph />
            <ConnectHealthApp onPress={() => navigation.navigate("BiomarkersForm")} />
            <OptimizedBiomarkers />
            <PendingBiomarkers />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#faf9f7",
    position: "relative",
  },
  contentContainer: {
    position: "relative",
    height: 1140,
  },
  topContainer: {
    width: "100%",
    height: 140,
    position: "absolute",
  },
  welcomeContainer: {
    marginTop: 40,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  welcomeTitle: {
    color: "#6243e9",
    fontSize: 28,
    fontWeight: "bold",
  },
  graphContainer: {
    paddingHorizontal: 16,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: '#FAF9F8',
    paddingTop: 36,
    elevation: 20,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    position: "absolute",
    zIndex: 2,
    top: 115,
  },
});

export default HomeView;
