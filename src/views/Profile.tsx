import React, { useRef, useMemo, useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Switch } from 'react-native-switch';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import NotificationIcon from "../icons/Notification";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import ZoeLogoIcon from "../icons/ZoeLogo";
import GradientText from "../components/GradientText";
import Stepper from "../components/Stepper";
import StackedCards from "../components/StackedCards";
import ApplePayIcon from "../icons/ApplePay";
import SmsText from "../icons/Sms";
import CheckBox from '../components/Checkbox';
import AmexIcon from "../icons/Amex";
import { toDp } from "../utils/sizes";

function ProfileView({ navigation }: any): JSX.Element {
  const [isQrCardVisible, setIsQrCardVisible] = useState(true);
  const [gender, setGender] = useState("M");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['70%', '100%'], []);

  function handleBottomSheetChange(index: number) {
    setIsQrCardVisible(index === 0);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        style={styles.fullGradientContainer}
        colors={[
          "#D6E7FC",
          "#FFEEDC",
          "#FFEEDC",
          "#FFEEDC",
        ]}
      >

      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft size="20" />
      </TouchableOpacity>
        <View
          style={styles.gradientContainer}
          key={'gradientContainer'}
        >
          {isQrCardVisible && (
            <Animated.View
              style={styles.gradientViewContainer}
              key={"gradientContainer"}
              entering={FadeIn.duration(400)}
              exiting={FadeOut.duration(100)}
            >
              <LinearGradient
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.5, y: 1.0}}
                style={styles.gradientCardContainer}
                colors={[
                  "#FE9E8C",
                  "#F86B93",
                  "#F44298",
                ]}
              >
                <View style={styles.gradientCardHeader}>
                  <ZoeLogoIcon />
                  <View>
                    <Text style={styles.gradientCardDate}>Joined April 29, 2023</Text>
                    <Text style={styles.gradientCardName}>Matthew Doyle</Text>
                  </View>
                </View>

                <View style={styles.gradientCardQrContainer}>
                  <View style={styles.gradientCardQrBox}>
                    <Image
                      style={styles.gradientCardQrImage}
                      source={require("../assets/qr.png")}
                    />
                  </View>
                  <Text style={styles.qrNumber}>ID 273937783</Text>
                </View>
              </LinearGradient>
            </Animated.View>
          )}
        </View>
        
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          style={styles.bottomSheetContainer}
          handleComponent={() => (
            <View
              style={styles.bottomSheetHandle}
              />
          )}
          snapPoints={snapPoints}
          topInset={0}
          onChange={handleBottomSheetChange}
        >
          <BottomSheetScrollView style={styles.scrollContainer}>
            <View style={styles.firstSection} />
            <TouchableOpacity style={styles.addToAppleWalletButton}>
              <Image
                source={require("../assets/wallet.png")}
              />
              <Text style={styles.addToAppleWalletButtonText}>Add to Apple Wallet</Text>
            </TouchableOpacity>
            <GradientText
              colors={["#6243E9", "#36237D"]}
              style={styles.stepperTitle}
            >
              Earn in 2 more visits
            </GradientText>
            <Stepper style={styles.stepper} steps={5} progress={40} />
            <StackedCards style={styles.stackedCards} />
            <Text style={styles.profileTitle}>Profile</Text>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionLabel}>Name</Text>

              <View style={styles.inputsRowContainer}>
                <TextInput
                  style={styles.leftInput}
                  placeholder="First"
                />
                <TextInput
                  style={styles.rightInput}
                  placeholder="Last"
                />
              </View>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionLabel}>Email</Text>
              <TextInput
                style={styles.rowInput}
                placeholder="Email"
              />
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionLabel}>Cell phone</Text>
              <TextInput
                style={styles.rowInput}
                placeholder="512 555 555"
              />
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionLabel}>Date of Birth</Text>

              <View style={styles.inputsRowContainer}>
                <TextInput
                  style={styles.leftInput}
                  placeholder="MM"
                />
                <TextInput
                  style={styles.input}
                  placeholder="DD"
                />
                <TextInput
                  style={styles.rightInput}
                  placeholder="YYYY"
                />
              </View>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionLabel}>Gender</Text>

              <View style={styles.checkboxesContainer}>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    active={gender === "M"}
                    onPress={() => setGender("M")}
                  />
                  <Text style={styles.checkboxText}>Male</Text>
                </View>
                <View style={[styles.checkboxContainer, { borderLeftWidth: 1, borderLeftColor: "#EEE" }]}>
                  <CheckBox
                    active={gender === "F"}
                    onPress={() => setGender("F")}
                  />
                  <Text style={styles.checkboxText}>Female</Text>
                </View>
              </View>
            </View>

            <View style={styles.sectionContainer}>
              <View style={styles.paymentMethodHeader}>
                <Text style={styles.sectionLabel}>Payment methoder</Text>
                <TouchableOpacity style={styles.paymentMethodHeaderButton}>
                  <Text style={styles.paymentMethodHeaderButtonIcon}>+</Text>
                  <Text style={styles.paymentMethodHeaderButtonText}>Add</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.paymentMethodItem}>
                <View style={styles.amexContainer}>
                  <AmexIcon />
                </View>
                <Text style={styles.amexLabel}>American Express</Text>
                <ArrowRight style={styles.paymentItemArrow} color="black" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.paymentMethodItem}>
                <View style={styles.applePayContainer}>
                  <ApplePayIcon />
                </View>
                <View>
                  <Text style={styles.amexLabel}>Apple Pay</Text>
                </View>
                <ArrowRight style={styles.paymentItemArrow} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.notificationsContainer}>
              <Text style={styles.containerTitle}>Notifications</Text>
              <View style={styles.notificationDetailsContainer}>
                <View style={styles.notificationDetailRow}>
                  <View style={styles.notificationDetailContainer}>
                    <NotificationIcon />
                    <Text style={styles.notificationDetailLabel}>Push notification</Text>
                  </View>

                  <Switch
                    value={true}
                    activeText=""
                    backgroundActive="#5837E8"
                    backgroundInactive="#F1F1F1"
                    circleBorderWidth={2}
                    circleBorderActiveColor="#5837E8"
                    circleBorderInactiveColor="#bebebe"
                  />
                </View>
                <View style={styles.notificationDetailRow}>
                  <View style={styles.notificationDetailContainer}>
                    <View style={styles.smsIconContainer}>
                      <SmsText />
                    </View>
                    <Text style={styles.notificationDetailLabel}>SMS notification</Text>
                  </View>

                  <Switch
                    value={false}
                    inActiveText=""
                    backgroundActive="#5837E8"
                    backgroundInactive="#F1F1F1"
                    circleBorderWidth={2}
                    circleBorderInactiveColor="#F1F1F1"
                  />
                </View>
              </View>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    width: 31,
    height: 31,
    borderRadius: 31,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    top: 20,
    left: 15,
  },
  stepperTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#6243e9",
    marginBottom: 18,
  },
  stepper: {
    marginBottom: 37,
  },
  stackedCards: {
    marginBottom: 130,
    marginTop: 37,
  },
  profileTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 26,
  },
  bottomSheetContainer: {
    backgroundColor: "transparent",
  },
  bottomSheetHandle: {
    width: "100%",
    height: 20,
    backgroundColor: "transparent",
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
  },
  scrollContainer: {
    paddingHorizontal: 19,
    backgroundColor: "transparent",
  },
  holdQrContainer: {
    marginTop: 57,
    justifyContent: "center",
    alignItems: "center",
  },
  holdQrCircle: {
    width: 105,
    height: 105,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 6,
    borderColor: "#3A2687",
    borderRadius: 100,
    overflow: "hidden",
  },
  holdQrLabel: {
    marginTop: 20,
    color: "#8D8D8D",
    fontSize: 20,
    fontWeight: "500",
  },
  profileContainer: {
    paddingBottom: 20,
    backgroundColor: "white",
  },
  headerLabel: {
    width: "100%",
    marginTop: 60,
    fontSize: 40,
    color: "black",
    fontWeight: "600",
    paddingHorizontal: 20,
  },
  fullGradientContainer: {
    flex: 1,
    paddingTop: 20,
  },
  gradientContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 40,
    position: 'relative',
    zIndex: 2,
  },
  gradientViewContainer: {
    overflow: "hidden",
    width: "100%",
    height: 238,
    borderRadius: 28,
    elevation: 20,
    marginTop: 10,
  },
  gradientCardContainer: {
    width: "100%",
    height: 238,
    borderRadius: 28,
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  gradientCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gradientCardDate: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "right",
  },
  gradientCardName: {
    color: "#601D3C",
    fontSize: 14,
    fontWeight: "600",
  },
  gradientCardQrContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradientCardQrBox: {
    backgroundColor: "white",
    width: 107,
    height: 107,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  gradientCardQrImage: {
    width: 107,
    height: 107,
  },
  qrNumber: {
    color: "#601D3C",
    fontSize: 12,
    fontWeight: "normal",
    marginTop: 15,
  },
  blurView: {
    position: "absolute",
    top: 240,
    left: 0,
    bottom: 0,
    right: 0,
    paddingHorizontal: 19,
    paddingVertical: 28,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    overflow: "hidden",
  },
  sectionContainer: {
    marginBottom: 20,
    flexDirection: "column",
  },
  sectionLabel: {
    fontSize: 12,
    color: "black",
    fontWeight: "500",
    marginBottom: 11,
  },
  inputsRowContainer: {
    width: "100%",
    flexDirection: "row",
  },
  checkboxesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EEE",
    height: 45,
  },
  checkboxContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingLeft: 17,
    height: "100%",
  },
  checkbox: {
  },
  checkboxText: {
    marginLeft: 12,
    color: "black",
    fontSize: 12,
    fontWeight: "500",
  },
  paymentMethodHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  paymentMethodHeaderButton: {
    width: 85,
    height: 31,
    borderRadius: 7,
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paymentMethodHeaderButtonIcon: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
  },
  paymentMethodHeaderButtonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
    marginLeft: 14,
  },
  paymentMethodItem: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
    alignItems: "center",
  },
  amexContainer: {
  },
  applePayContainer: {
    width: 25,
    height: 16,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 3,
    padding: 2,
  },
  amexLabel: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 12,
  },
  paymentItemArrow: {
    marginLeft: "auto",
  },
  firstSection: {
    marginTop: 140,
  },
  addToAppleWalletButton: {
    width: "100%",
    height: 45,
    backgroundColor: "#050707",
    borderRadius: 5,
    marginBottom: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addToAppleWalletButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 6,
  },
  input: {
    flex: 1,
    height: 55,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#EEE",
    // borderColor: "#6243E9",
    paddingHorizontal: 16,
  },
  leftInput: {
    flex: 1,
    height: 55,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#EEE",
    // borderColor: "#6243E9",
    paddingHorizontal: 16,
    borderTopLeftRadius: toDp(8),
    borderBottomLeftRadius: toDp(8),
    borderRightWidth: 1,
  },
  rightInput: {
    flex: 1,
    height: 55,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#EEE",
    // borderColor: "#6243E9",
    paddingHorizontal: 16,
    borderTopRightRadius: toDp(8),
    borderBottomRightRadius: toDp(8),
    borderLeftWidth: 1,
  },
  rowInput: {
    width: "100%",
    height: 55,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#EEE",
    // borderColor: "#6243E9",
    paddingHorizontal: 16,
    borderRadius: toDp(8),
  },
  listContainer: {
    alignItems: "center",
    flexDirection: "column",
    height: 930,
  },
  profileImageButton: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: "#B1C3FA",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 59,
  },
  profileText: {
    color: "#213B8C",
    fontSize: 20,
    fontWeight: "600",
  },
  profileName: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 7,
  },
  profileCreation: {
    color: "#8D8C8C",
    fontSize: 12,
    fontWeight: "500",
  },
  detailsContainer: {
    width: "100%",
    height: 293,
    backgroundColor: "#FAF9F8",
    borderRadius: 28,
    marginTop: 15,
    paddingHorizontal: 27,
    paddingVertical: 21,
  },
  containerTitle: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
  },
  detailsListContainer: {
    marginTop: 12,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
    height: 60,
  },
  borderlessDetailRow: {
    flexDirection: "row",
    alignItems: "center", 
    height: 60,
  },
  detailLabel: {
    marginLeft: 20,
    color: "black",
    fontSize: 14,
    fontWeight: "500",
  },
  insuranceContainer: {
    width: "100%",
    height: 122,
    borderRadius: 28,
    paddingHorizontal: 27,
    paddingVertical: 21,
    backgroundColor: "#FAF9F8",
    marginTop: 17,
  },
  inputsContainer: {
    flexDirection: "row",
    marginTop: 14,
  },
  providerCarrierInput: {
    width: "45%",
    height: 45,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EEE",
    paddingLeft: 15,
  },
  memberIdInput: {
    width: "30%",
    height: 45,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EEE",
    paddingLeft: 15,
  },
  cameraButton: {
    flex: 1,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EEE",
  },
  notificationsContainer: {
    width: "100%",
    height: 172,
    marginTop: 33,
    marginBottom: 30,
  },
  notificationDetailsContainer: {
    marginTop: 12,
  },
  notificationDetailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
    paddingRight: 5,
  },
  notificationDetailContainer: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  notificationDetailLabel: {
    marginLeft: 15,
    color: "black",
    fontSize: 14,
    fontWeight: "500",
  },
  signOutButton: {
    width: "100%",
    height: 45,
    borderRadius: 100,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 18,
  },
  signOutButtonText: {
    color: "#6243E9",
    fontSize: 12,
    fontWeight: "600",
  },
  smsIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileView;
