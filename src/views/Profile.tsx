import React, { useRef, useMemo } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Switch } from 'react-native-switch';
import { BlurView } from "@react-native-community/blur";
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import CalendarIcon from "../icons/Calendar";
import CameraIcon from "../icons/Camera";
import EmailIcon from "../icons/Email";
import NotificationIcon from "../icons/Notification";
import PhoneIcon from "../icons/Phone";
import SmsNotificationIcon from "../icons/SmsNotification";
import UserIcon from "../icons/User";
import ArrowLeft from "../icons/ArrowLeft";

function ProfileView({ navigation }: any): JSX.Element {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['20%', '60%', '90%'], []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft size="20" />
      </TouchableOpacity>
      <Text style={styles.headerLabel}>Profile</Text>
        <View style={styles.gradientContainer}>
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
              <Image
                source={require("../assets/zoelogo.png")}
              />
              <View>
                <Text style={styles.gradientCardDate}>Joined April 29, 2023</Text>
                <Text style={styles.gradientCardName}>Matthew Doyle</Text>
              </View>
            </View>

            <View style={styles.gradientCardQrContainer}>
              <View style={styles.gradientCardQrBox}>
                <Image
                  style={styles.gradientCardQrImage}
                  source={require("../assets/exampleQr.png")}
                />
              </View>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.holdQrContainer}>
          <View style={styles.holdQrCircle}>
            <Image source={require("../assets/holdQr.png")} />
          </View>
          <Text style={styles.holdQrLabel}>Hold Near for scan</Text>
        </View>
        
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          style={styles.bottomSheetContainer}
          handleComponent={() => (
            <View
              style={styles.bottomSheetHandle}
              />
          )}
          backgroundStyle={{
            backgroundColor: "transparent",
          }}
          backgroundComponent={(props) => (
            <BlurView
              style={styles.scrollContainer}
              blurRadius={10}
              blurType="light"
              {...props}
              />
          )}
          snapPoints={snapPoints}
          topInset={0}
        >
          <BottomSheetScrollView style={styles.scrollContainer}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionLabel}>Name</Text>

              <View style={styles.inputsRowContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="First"
                />
                <TextInput
                  style={styles.input}
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
                  style={styles.input}
                  placeholder="MM"
                />
                <TextInput
                  style={styles.input}
                  placeholder="DD"
                />
                <TextInput
                  style={styles.input}
                  placeholder="YYYY"
                />
              </View>
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
                    circleBorderWidth={1}
                    circleBorderInactiveColor="#bebebe"
                  />
                </View>
                <View style={styles.notificationDetailRow}>
                  <View style={styles.notificationDetailContainer}>
                    <SmsNotificationIcon />
                    <Text style={styles.notificationDetailLabel}>SMS notification</Text>
                  </View>

                  <Switch
                    value={false}
                    inActiveText=""
                    backgroundActive="#5837E8"
                    backgroundInactive="#F1F1F1"
                    circleBorderWidth={1}
                    circleBorderInactiveColor="#bebebe"
                  />
                </View>
              </View>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
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
  gradientContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  gradientCardContainer: {
    marginTop: 10,
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
    width: 87,
    height: 87,
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
  input: {
    flex: 1,
    height: 55,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#EEE",
    // borderColor: "#6243E9",
    paddingHorizontal: 16,
  },
  rowInput: {
    width: "100%",
    height: 55,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#EEE",
    // borderColor: "#6243E9",
    paddingHorizontal: 16,
    borderRadius: 5,
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
    borderRadius: 28,
    paddingHorizontal: 27,
    paddingVertical: 21,
    backgroundColor: "#FAF9F8",
    marginTop: 33,
    marginBottom: 30,
  },
  notificationDetailsContainer: {
    marginTop: 12,
  },
  notificationDetailRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
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
});

export default ProfileView;
