import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import GradientText from "../components/GradientText";
import ViewHeader from "../components/ViewHeader";
import CalendarAddIcon from "../icons/CalendarAdd";
import ClockIcon from "../icons/Clock";
import HomeLocationIcon from "../icons/HomeLocation";

function BookingView({ navigation }: any): JSX.Element {
  return (
    <SafeAreaView style={styles.bookingContainer}>
      <ScrollView>
        <ViewHeader title="Appointment" />
        <View style={styles.contentContainer}>
          <GradientText
            colors={["#6243e9", "#392685", "#392685"]}
            style={styles.gradientTitle}
          >
            Wednesday, at 12.30pm
          </GradientText>

          <View style={styles.topContainer}>
            <View style={styles.purpleContainer}>
              <Text style={styles.appointmentDurationLabel}>12.30pm - 3.30pm</Text>
              <Text style={styles.discoveryCallLabel}>Discovery call</Text>
              <View style={styles.indicatorRow}>
                <View style={styles.indicatorIconContainer}>
                  <ClockIcon />
                </View>
                <Text style={styles.indicatorLabel}>15 min</Text>
              </View>
              <View style={styles.indicatorRow}>
                <View style={styles.indicatorIconContainer}>
                  <ClockIcon />
                </View>
                <Text style={styles.indicatorLabel}>Video call</Text>
              </View>
              <Text style={styles.confirmationLabel}>Can you still make your appointment for today?</Text>

              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.confirmationButton}>
                  <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmationButton}>
                  <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dateContainer}>
                <Text style={styles.dateMonth}>May</Text>
                <Text style={styles.dateDay}>3</Text>
              </View>
            </View>

            <View style={styles.textsContainer}>
              <Image
                style={styles.bussinessImage}
                source={require("../assets/coloradosportsdoctor.png")}
              />
              <Text style={styles.titleLabel}>Colorado Sports Doctor</Text>
              <View style={styles.homeLocationContainer}>
                <HomeLocationIcon />
                <Text style={styles.homeLocationLabel}>3301 N Miller Rd Ste 120, Scottsdale, AZ 85251</Text>
              </View>
            </View>
            
            <View style={styles.doctorDetailsContainer}>
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

            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.addToCalendarButton}>
                <CalendarAddIcon />
                <Text style={styles.addToCalendarButtonText}>Add to calendar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.appleWalletButton}>
                <Image
                  style={styles.appleWalletImage}
                  source={require("../assets/applewallet.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bookingContainer: {
    backgroundColor: "#FAF9F8",
    height: "100%",
  },
  contentContainer: {
    paddingHorizontal: 19,
  },
  gradientTitle: {
    fontSize: 25,
    fontWeight: "600",
  },
  topContainer: {
    width: "100%",
    borderRadius: 28,
    backgroundColor: "white",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    marginBottom: 20,
  },
  purpleContainer: {
    width: "100%",
    height: 265,
    borderRadius: 28,
    backgroundColor: "#36237D",
    paddingHorizontal: 25,
    paddingVertical: 28,
  },
  appointmentDurationLabel: {
    color: "white",
    fontSize: 15,
    fontWeight: "400",
  },
  discoveryCallLabel: {
    color: "#BD9FFE",
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 10,
  },
  indicatorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  indicatorIconContainer: {
    width: 30,
  },
  indicatorLabel: {
    color: "white",
    fontSize: 13,
    fontWeight: "400",
  },
  confirmationLabel: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 15,
    gap: 17,
  },
  confirmationButton: {
    width: 117,
    height: 49,
    backgroundColor: "#46328E",
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "600",
  },
  dateContainer: {
    width: 59,
    height: 63,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#624FA8",
    position: "absolute",
    right: 25,
    top: 28,
  },
  dateMonth: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    borderBottomWidth: 2,
    lineHeight: 20,
    borderColor: "#624FA8",
  },
  dateDay: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
  },
  textsContainer: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
  },
  bussinessImage: {
    width: 141,
    height: 26,
  },
  titleLabel: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
    marginTop: 20,
  },
  homeLocationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 5,
  },
  homeLocationLabel: {
    color: "black",
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 8,
  },
  doctorDetailsContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
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
  verifiedImage: {
    width: 58,
    marginTop: 8,
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
  },
  actionsContainer: {
    width: "100%",
    paddingHorizontal: 25,
    paddingVertical: 21,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addToCalendarButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 43,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#DDDEDF",
  },
  addToCalendarButtonText: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 9,
  },
  appleWalletButton: {
    width: 135,
    height: 42,
  },
  appleWalletImage: {
    width: 135,
    height: 42,
  },
});

export default BookingView;
