import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Accordion from "../components/Accordion";
import Document from "../components/Document";
import CalendarNote from "../icons/CalendarNote";
import CheckIcon from "../icons/Check";
import ClockIcon from "../icons/Clock";
import CloseIcon from "../icons/Close";
import HomeLocationIcon from "../icons/HomeLocation";
import RightIcon from "../icons/Right";
import VerifiedIcon from "../icons/Verified";
import VideoCallIcon from "../icons/VideoCall";
import WalletIcon from "../icons/Wallet";

function ChatDetails({ navigation }): JSX.Element {
  const [isPaymentsExpanded, setIsPaymentsExpanded] = useState(false);
  const [isBookingsExpanded, setIsBookingsExpanded] = useState(false);
  const [isDocumentsExpanded, setIsDocumentsExpanded] = useState(false);
  const [isSharedDocumentsExpanded, setIsSharedDocumentsExpanded] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerLabel}>Details</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.closeButtonContainer}
          >
            <CloseIcon />
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
                <VerifiedIcon />
              </View>
          </View>
        </View>

        <Accordion
          title="Payments"
          isExpanded={isPaymentsExpanded}
          onPress={() => setIsPaymentsExpanded(prevState => !prevState)}
        >
          <View style={styles.paymentContainer}>
            <View style={styles.paymentTopContainer}>
              <View style={styles.paymentDollarContainer}>
                <Text style={styles.paymentDollarSign}>$</Text>
              </View>
              <Text style={styles.paymentAmmount}>5000</Text>
            </View>
            <View style={styles.paymentBottomContainer}>
              <View style={styles.paymentMethodContainer}>
                <Text style={styles.paymentMethodTitle}>Payment method</Text>
                <View style={styles.paymentDetailsContainer}>
                  <Image
                    source={require("../assets/wf.png")}
                  />
                  <Text style={styles.cardNumbers}>**** 3645</Text>
                </View>
              </View>
              <View style={styles.paymentStatusContainer}>
                <Text style={styles.paymentStatusTitle}>Status</Text>
                <View style={styles.paymentStatusBoxContainer}>
                  <Text style={styles.paymentStatusLabel}>Succeeded</Text>
                  <CheckIcon />
                </View>
              </View>
            </View>
          </View>
        </Accordion>

        <Accordion
          title="Bookings"
          isExpanded={isBookingsExpanded}
          onPress={() => setIsBookingsExpanded(prevState => !prevState)}
        >
          <View style={styles.bookingsContainer}>
            <Text style={styles.bookingsTitle}>12.30pm - 3.30pm</Text>
            <Text style={styles.bookingsSubtitle}>Discovery call</Text>
            <View style={styles.indicatorContainer}>
              <ClockIcon color="black" />
              <Text style={styles.indicatorText}>15 min</Text>
            </View>
            <View style={styles.indicatorContainer}>
              <VideoCallIcon color="black" />
              <Text style={styles.indicatorText}>Video call</Text>
            </View>
            <View style={styles.indicatorContainer}>
              <WalletIcon color="black" />
              <Text style={styles.indicatorText}>$100</Text>
            </View>
            <View style={styles.dateContainer}>
              <View style={styles.dateTopContainer}>
                <Text style={styles.dateMonth}>May</Text>
              </View>
              <Text style={styles.dateDay}>3</Text>
            </View>
          </View>
        </Accordion>

        <Accordion
          title="Documents"
          isExpanded={isDocumentsExpanded}
          onPress={() => setIsDocumentsExpanded(prevState => !prevState)}
        >
          <TouchableOpacity style={styles.documentButton}>
            <CalendarNote />
            <Text style={styles.patientOnboardingText}>Patient onboarding</Text>
            <TouchableOpacity style={styles.patientOnboardingButton}>
              <RightIcon />
            </TouchableOpacity>
          </TouchableOpacity>
        </Accordion>

        <Accordion
          title="Your shared documents"
          isExpanded={isSharedDocumentsExpanded}
          onPress={() => setIsSharedDocumentsExpanded(prevState => !prevState)}
        >
          <Document
            name="Bloodwork_mattjones.PDF"
            authors={[{
              name: "Terrence Smith"
            }]}
          />
        </Accordion>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 40,
    justifyContent: "space-between",
    height: 85,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
    paddingTop: 20,
  },
  headerLabel: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
  },
  closeButtonContainer: {
    width: 31,
    height: 31,
    borderRadius: 31,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 10,
  },
  doctorName: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
  },
  verifiedImage: {
    width: 58,
    marginTop: 8,
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
  },
  paymentContainer: {
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EAE6DE",
  },
  paymentTopContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EAE6DE",
  },
  paymentDollarContainer: {
    width: 37,
    height: 37,
    borderRadius: 37,
    backgroundColor: "#6243E9",
    alignItems: "center",
    justifyContent: "center",
    bottom: 12,
    marginRight: 3
  },
  paymentDollarSign: {
    color: "white",
    fontWeight: "bold",
    fontSize: 19,
  },
  paymentAmmount: {
    color: "#1D1B46",
    fontSize: 64,
    fontWeight: "500",
  },
  paymentBottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 17,
    paddingVertical: 13,
  },
  paymentMethodContainer: {
    flexDirection: "column",
  },
  paymentMethodTitle: {
    color: "#A9A9A9",
    fontSize: 12,
  },
  paymentDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardNumbers: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
  },
  paymentStatusContainer: {

  },
  paymentStatusTitle: {
    color: "#A9A9A9",
    fontSize: 12,
    marginBottom: 10,
  },
  paymentStatusBoxContainer: {
    width: 101,
    height: 22,
    backgroundColor: "#D8F5BF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paymentStatusLabel: {
    fontSize: 12,
    color: "#275C1A",
    fontWeight: "500",
    marginRight: 7,
  },
  bookingsContainer: {
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EAE6DE",
    padding: 17,
    position: "relative",
  },
  bookingsTitle: {
    color: "black",
    fontSize: 15,
    fontWeight: "400",
  },
  bookingsSubtitle: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
  },
  indicatorText: {
    color: "black",
    fontSize: 13,
    marginLeft: 15,
  },
  dateContainer: {
    position: "absolute",
    right: 13,
    top: 13,
    width: 59,
    paddingVertical: 2,
    borderWidth: 2,
    borderColor: "#E4E4E4",
    borderRadius: 12,
    overflow: "hidden",
  },
  dateTopContainer: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#E4E4E4",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6"
  },
  dateMonth: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 2,
  },
  dateDay: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  documentButton: {
    width: "100%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EAE6DE",
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 17,
    alignItems: "center",
  },
  patientOnboardingText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6243E9",
    marginLeft: 13,
  },
  patientOnboardingButton: {
    width: 26,
    height: 26,
    backgroundColor: "#DCD3FF",
    borderRadius: 100,
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatDetails;
