import React, { useRef, useMemo, useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  PixelRatio,
} from "react-native";
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import SystemNavigationBar from 'react-native-system-navigation-bar';

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
import VerifiedIcon from "../icons/Verified";
import AppleWallet from "../icons/AppleWallet";
import { toDp } from "../utils/sizes";
import Date from "../components/Date";

function BookingView({ navigation }: any): JSX.Element {
  const [sheetIndex, setSheetIndex] = useState(-1);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['95%', '100%'], []);

  const handleBookingButton = useCallback(() => {
    bottomSheetRef.current?.present();
  }, [bottomSheetRef]);

  const handleDismissPress = useCallback(() => {
    bottomSheetRef.current?.forceClose();
  }, [bottomSheetRef]);

  const handleSheetChange = useCallback((index: number) => {
    setSheetIndex(index);
  }, []);

  useEffect(() => {
    if (sheetIndex === -1) {
      SystemNavigationBar.setNavigationColor('white');
    } else {
      SystemNavigationBar.setNavigationColor('#36237D');
    }
  }, [sheetIndex]);

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

                <Date
                  month="May"
                  day={3}
                  textsColor="white"
                  borderColor="#624FA8"
                  monthBackgroundColor="rgba(98, 79, 168, 0.36)"
                  style={{
                    position: "absolute",
                    right: 25,
                    top: 28,
                  }}
                />
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
                  <Text style={styles.doctorName}><Text style={styles.doctorSuffix}>Dr. </Text>David Wood</Text>
                  <VerifiedIcon />
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
                  <AppleWallet />
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
                <Text style={styles.doctorName}><Text style={styles.doctorSuffix}>Dr. </Text>David Wood</Text>
                <VerifiedIcon />
              </View>

              <Date
                month="May"
                day={3}
                textsColor="black"
                borderColor="#F3F3F3"
                monthBackgroundColor="#F6F6F6"
                style={{
                  position: "absolute",
                  right: 20,
                  top: 58,
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      
      <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose
          handleComponent={null}
          onChange={handleSheetChange}
          style={[styles.bottomSheet, sheetIndex === 1 ? styles.flatBorders : {}]}
        >
        <BookingDetailsView onDismiss={handleDismissPress} />
      </BottomSheetModal>
    </>
  )
}

const styles = StyleSheet.create({
  bookingContainer: {
    backgroundColor: "#FAF9F8",
    height: "100%",
  },
  flatBorders: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  bottomSheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: "hidden",
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
    height: 255,
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
    width: toDp(75),
    height: toDp(75),
    borderRadius: toDp(15),
  },
  doctorLabelsContainer: {
    flex: 1,
    marginLeft: 15,
  },
  doctorTitle: {
    color: "black",
    fontSize: toDp(7),
    marginBottom: 8,
    fontFamily: "PPSupplyMono-Regular"
  },
  doctorSuffix: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
    marginBottom: 8,
    fontFamily: "TestCalibre-MediumItalic"
  },
  doctorName: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
    marginBottom: 8,
    fontFamily: "TestCalibre-Medium"
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
    height: toDp(126),
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: toDp(23),
    marginBottom: 10,
  },
  menuHandle: {
    width: "100%",
    backgroundColor: "#36237D",
    height: 63,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    justifyContent: "center",
    paddingTop: 20,
    paddingLeft: 40,
  }
});

export default BookingView;
