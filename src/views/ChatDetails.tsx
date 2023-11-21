import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import HomeLocationIcon from "../icons/HomeLocation";

function ChatDetails({ navigation }): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerLabel}>Details</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.closeButtonText}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.contactLabel}>Contact</Text>

          <View style={styles.profileContainer}>
            <TouchableOpacity style={styles.profilePictureContainer}>
              <Text style={styles.profileInitials}>EP</Text>
            </TouchableOpacity>

            <Text style={styles.profileName}>Eric Peterson</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Image
            style={styles.bussinessImage}
            source={require("../assets/coloradosportsdoctor.png")}
          />
          <Text style={styles.bussinessLocationText}>Colorado Sports Doctor</Text>

          <View style={styles.locationTextsContainer}>
            <HomeLocationIcon />
            <Text style={styles.locationText}>3301 N Miller Rd Ste 120, Scottsdale, AZ 85251</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.doctorContainer}>
              <Image
                style={styles.doctorImage}
                source={{uri: "https://i.pinimg.com/564x/ab/68/8b/ab688b791dcd556181d2786f54db9fe6.jpg"}}
              />
              <View style={styles.doctorLabelsContainer}>
                <Text style={styles.doctorTitle}>CHIEF MEDICAL OFFICER, ADVANTAGE IR</Text>
                <Text style={styles.doctorName}>Dr. David Wood</Text>
                <Image
                  style={styles.verifiedImage}
                  source={require("../assets/verified.png")}
                />
              </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 40,
    justifyContent: "space-between",
    height: 65,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
  },
  headerLabel: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: "500",
    color: "black",
  },
  contactLabel: {
    color: "#6A6A6A",
    fontSize: 14,
    fontWeight: "500",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePictureContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    backgroundColor: "#F6C3B0",
    borderRadius: 100,
  },
  profileInitials: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#956D5E",
  },
  profileName: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 16,
  },
  bussinessImage: {
    width: 141,
    height: 26,
  },
  contentContainer: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
    paddingHorizontal: 40,
    paddingVertical: 22,
  },
  bussinessLocationText: {
    color: "black",
    fontWeight: "bold",
    marginTop: 15,
  },
  locationTextsContainer: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  locationText: {
    marginLeft: 10,
    color: "black",
    fontSize: 13,
  },
  doctorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  doctorImage: {
    width: 75,
    height: 75,
    borderRadius: 15,
  },
  doctorLabelsContainer: {
    flex: 1,
    marginLeft: 26,
  },
  doctorTitle: {
    color: "black",
    fontSize: 11,
  },
  doctorName: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
    marginTop: 10,
  },
});

export default ChatDetails;
