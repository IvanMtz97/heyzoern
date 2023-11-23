import React, { useRef, useMemo, useCallback } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import GradientText from "../components/GradientText";
import ViewHeader from "../components/ViewHeader";
import BookingClockIcon from "../icons/BookingClock";
import CalendarAddIcon from "../icons/CalendarAdd";
import ChatIcon from "../icons/Chat";
import ClockIcon from "../icons/Clock";
import DirectionsIcon from "../icons/Directions";
import HomeLocationIcon from "../icons/HomeLocation";
import TelephoneIcon from "../icons/TelephoneIcon";
import BookingDetailsView from "./BookinDetails";
import WalletIcon from "../icons/Wallet";
import VideoCallIcon from "../icons/VideoCall";
import ArrowDown from "../icons/ArrowDown";

function BookingView({ navigation }: any): JSX.Element {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['95%'], []);

  const handleBookingButton = useCallback(() => {
    bottomSheetRef.current?.present();
  }, [bottomSheetRef]);

  return (
    <>
      <SafeAreaView style={styles.bookingContainer}>
        <ScrollView style={{ flex: 1 }}>
          <ViewHeader title="Appointment" />
          <View style={styles.contentContainer}>
            <GradientText
              colors={["#6243e9", "#392685", "#392685"]}
              style={styles.gradientTitle}
            >
              Wednesday, at 12.30pm
            </GradientText>

            <View style={styles.topContainer}>
              <TouchableOpacity style={styles.purpleContainer} onPress={handleBookingButton}>
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
                <Text style={styles.confirmationLabel}>Can you still make your appointment for today?</Text>

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

                <View style={styles.dateContainer}>
                  <Text style={styles.dateMonth}>May</Text>
                  <Text style={styles.dateDay}>3</Text>
                </View>
              </TouchableOpacity>

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
                <View style={styles.addToCalendarContainer}>
                  <TouchableOpacity style={styles.addToCalendarButton}>
                    <CalendarAddIcon />
                    <Text style={styles.addToCalendarButtonText}>Add to calendar</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.appleWalletButton}>
                  <Image
                    style={styles.appleWalletImage}
                    source={require("../assets/applewallet.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.pastAppointmentsTitle}>Past appointments</Text>

            <View style={styles.appointmentContainer}>
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

              <View style={styles.appointmentDateContainer}>
                <Text style={styles.appointmentDateMonth}>May</Text>
                <Text style={styles.appointmentDateDay}>3</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      
      <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose
          topInset={2}
          handleComponent={() => (
            <TouchableOpacity
              style={styles.menuHandle}
              onPress={() => bottomSheetRef.current?.forceClose()}
            >
              <ArrowDown color="white" />
            </TouchableOpacity>
          )}
        >
        <BookingDetailsView />
      </BottomSheetModal>
    </>
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
    color: "#6243e9",
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
    height: 285,
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
  },
  appleWalletImage: {
    width: 135,
    height: 42,
  },
  pastAppointmentsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "black",
    marginTop: 10,
  },
  appointmentContainer: {
    width: "100%",
    height: 126,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  appointmentDateContainer: {
    width: 59,
    height: 63,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#F3F3F3",
    position: "absolute",
    right: 40,
    top: 48,
  },
  appointmentDateMonth: {
    color: "black",
    textAlign: "center",
    fontSize: 12,
    borderBottomWidth: 2,
    lineHeight: 20,
    borderColor: "#F3F3F3",
  },
  appointmentDateDay: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
  menuHandle: {
    width: "100%",
    backgroundColor: "#36237D",
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    paddingLeft: 40,
  }
});

export default BookingView;
