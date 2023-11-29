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
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import ClockIcon from "../icons/Clock";
import VideoCallIcon from "../icons/VideoCall";
import WalletIcon from "../icons/Wallet";
import ChatIcon from "../icons/Chat";
import TelephoneIcon from "../icons/TelephoneIcon";
import DirectionsIcon from "../icons/Directions";
import BookingClockIcon from "../icons/BookingClock";
import HomePinIcon from "../icons/HomePin";
import CreditCardIcon from "../icons/CreditCard";
import ZoePayIcon from "../icons/ZoePay";
import CalendarAddIcon from "../icons/CalendarAdd";

function BookingDetailsView(): JSX.Element {
  return (
    <BottomSheetScrollView contentContainerStyle={styles.bookingDetailsContainer}>
      <View style={styles.bookingDetailsLabelsContainer}>
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
            <ChatIcon color="#D3C6F3" />
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
          <View style={styles.statusTopContainer}>
            <View>
              <Text style={styles.statusCellText}>Status</Text>
              <Text style={styles.statusCellValue}>Unpaid</Text>
            </View>
            
            <View>
              <Text style={styles.statusCellText}>Sent on</Text>
              <Text style={styles.statusCellValue}>May 16 9:41</Text>
            </View>
          </View>
          <View style={styles.statusButtonsContainer}>
            <TouchableOpacity style={styles.statusCreditCardButton}>
              <CreditCardIcon />
              <Text style={styles.statusCreditCardButtonText}>Credit Card</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.statusZoePayButton}>
              <ZoePayIcon />
              <Text style={styles.statusZoePayButtonText}>ZoePay</Text>
            </TouchableOpacity>
          </View>
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
            source={require("../assets/VerifiedOutlined.png")}
          />
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.addToCalendarContainer}>
          <TouchableOpacity style={styles.addToCalendarButton}>
            <CalendarAddIcon />
            <Text style={styles.addToCalendarButtonText}>Add to calendar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.appleWalletButton}>
          <Image
            style={styles.appleWalletImage}
            source={require("../assets/applewalletoutlined.png")}
          />
        </TouchableOpacity>
      </View>
    </BottomSheetScrollView>
  )
}

const styles = StyleSheet.create({
  bookingDetailsContainer: {
    backgroundColor: "#36237D",
    paddingHorizontal: 20,
  },
  bookingDetailsLabelsContainer: {
    marginTop: 10,
    paddingHorizontal: 30,
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
    marginLeft: 5,
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
    color: "white",
  },
  paymentContainer: {
    width: "100%",
    height: 212,
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
    flexDirection: "column",
    paddingHorizontal: 26,
    marginTop: 10,
  },
  statusTopContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusButtonsContainer: {
    marginTop: 22,
    flexDirection: "row",
    gap: 13,
  },
  statusCreditCardButton: {
    width: 127,
    height: 31,
    backgroundColor: "#F4F4F4",
    borderRadius: 5,
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  statusCreditCardButtonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "400",
  },
  statusZoePayButton: {
    width: 94,
    height: 31,
    borderRadius: 5,
    backgroundColor: "#F3F0FF",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  statusZoePayButtonText: {
    color: "#6243E9",
    fontSize: 15,
    fontWeight: "bold",
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
  doctorDetailsContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 25,
    marginTop: 81,
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
    color: "white",
  },
  doctorName: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
    marginTop: 10,
  },
  verifiedImage: {
    width: 58,
    marginTop: 8,
  },
  actionsContainer: {
    width: "100%",
    paddingHorizontal: 25,
    paddingVertical: 21,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  addToCalendarContainer: {
    width: 150,
    height: 43,
    elevation: 3,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#DDDEDF",
  },
  addToCalendarButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    overflow: "hidden",
    borderRadius: 5,
  },
  appleWalletImage: {
    width: 135,
    height: 42,
  },
});

export default BookingDetailsView;
