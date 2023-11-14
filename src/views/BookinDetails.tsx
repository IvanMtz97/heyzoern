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

import ClockIcon from "../icons/Clock";
import VideoCallIcon from "../icons/VideoCall";
import WalletIcon from "../icons/Wallet";
import ChatIcon from "../icons/Chat";
import TelephoneIcon from "../icons/TelephoneIcon";
import DirectionsIcon from "../icons/Directions";
import BookingClockIcon from "../icons/BookingClock";
import HomePinIcon from "../icons/HomePin";

function BookingDetailsView(): JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.bookingDetailsContainer}>
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
          <VideoCallIcon />
        </View>
        <Text style={styles.indicatorLabel}>Video call</Text>
      </View>
      <View style={styles.indicatorRow}>
        <View style={styles.indicatorIconContainer}>
          <WalletIcon />
        </View>
        <Text style={styles.indicatorLabel}>$100</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.confirmationButton}>
          <ChatIcon disabled />
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmationButton}>
          <TelephoneIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmationButton}>
          <DirectionsIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmationButton}>
          <BookingClockIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <View style={styles.mapImageContainer}>
          <Image
            style={styles.mapImage}
            source={require("../assets/map.png")}
          />
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.locationTitle}>Colorado Sports Doctor</Text>
          <View style={styles.locationDetailsContainer}>
            <View style={styles.locationLeftContainer}>
              <HomePinIcon />
              <View style={styles.locationTextsContainer}>
                <Text style={styles.locationText}>3301 N Miller Rd Ste 120,</Text>
                <Text style={styles.locationText}>Scottsdale, AZ 85251</Text>
              </View>
            </View>

            <View style={styles.milesContainer}>
              <Text style={styles.mileText}>200ml</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.paymentContainer}>
        <View style={styles.amountContainer}>
          <View style={styles.dollarCircle}>
            <Text style={styles.dollarText}>$</Text>
          </View>
          <Text style={styles.ammountText}>5000</Text>
        </View>
        <View style={styles.statusContainer}>
          <View>
            <Text style={styles.statusCellText}>Status</Text>
            <Text style={styles.statusCellValue}>Unpaid</Text>
          </View>
          
          <View>
            <Text style={styles.statusCellText}>Sent on</Text>
            <Text style={styles.statusCellValue}>May 16 9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bookingDetailsContainer: {
    backgroundColor: "#36237D",
    height: "100%",
    paddingTop: 40,
    paddingHorizontal: 20,
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
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
    justifyContent: "space-between",
  },
  confirmationButton: {
    width: 68,
    height: 49,
    backgroundColor: "#46328E",
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    width: "100%",
    height: 312,
    borderWidth: 1,
    borderRadius: 28,
    borderColor: "rgba(152, 137, 199, 0.15)",
    marginTop: 28,
    overflow: "hidden",
    backgroundColor: "rgba(211, 198, 243, 0.04)",
  },
  mapImageContainer: {
    width: "100%",
    height: 180,
    borderRadius: 28,
    backgroundColor: "red",
    overflow: "hidden",
  },
  mapImage: {
    width: "100%",
    height: 180,
  },
  locationContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 22,
  },
  locationTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  locationLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationDetailsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 18,
  },
  locationTextsContainer: {
    marginLeft: 6,
  },
  locationText: {
    color: "#D3C6F3",
    fontSize: 12,
  },
  milesContainer: {
    backgroundColor: "#46328E",
    width: 60,
    height: 35,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  mileText: {
    fontSize: 11,
    color: "#9889c7",
  },
  paymentContainer: {
    width: "100%",
    height: 312,
    borderWidth: 1,
    borderRadius: 28,
    borderColor: "rgba(152, 137, 199, 0.15)",
    marginTop: 28,
    overflow: "hidden",
    backgroundColor: "rgba(211, 198, 243, 0.04)",
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 95,
    borderBottomWidth: 1,
    borderBottomColor: "#4A388C",
  },
  dollarCircle: {
    width: 37,
    height: 37,
    borderRadius: 37,
    backgroundColor: "#BD9FFE",
    marginTop: 15,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dollarText: {
    color: "#36237D",
    fontSize: 19,
    fontWeight: "500",
  },
  ammountText: {
    color: "white",
    fontSize: 64,
    fontWeight: "500",
  },
  statusContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 26,
    marginTop: 10,
  },
  statusCellText: {
    color: "#D3C6F3",
    fontSize: 12,
    fontWeight: "400",
  },
  statusCellValue: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default BookingDetailsView;
