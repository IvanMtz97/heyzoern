import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Switch } from 'react-native-switch';
import CalendarIcon from "../icons/Calendar";
import CameraIcon from "../icons/Camera";
import EmailIcon from "../icons/Email";
import NotificationIcon from "../icons/Notification";
import PhoneIcon from "../icons/Phone";
import SmsNotificationIcon from "../icons/SmsNotification";
import UserIcon from "../icons/User";

function ProfileView(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        style={styles.profileContainer}
        contentContainerStyle={styles.listContainer}
      >
        <TouchableOpacity style={styles.profileImageButton}>
          <Text style={styles.profileText}>MD</Text>
        </TouchableOpacity>
        <Text style={styles.profileName}>Matt Doyle</Text>
        <Text style={styles.profileCreation}>Joined April 29, 2023</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.containerTitle}>General</Text>
          <View style={styles.detailsListContainer}>
            <View style={styles.detailRow}>
              <UserIcon />
              <Text style={styles.detailLabel}>Matt Doyle</Text>
            </View>
            <View style={styles.detailRow}>
              <EmailIcon />
              <Text style={styles.detailLabel}>mattdoyle@me.com</Text>
            </View>
            <View style={styles.detailRow}>
              <PhoneIcon />
              <Text style={styles.detailLabel}>{"(512) 999-1079"}</Text>
            </View>
            <View style={styles.borderlessDetailRow}>
              <CalendarIcon />
              <Text style={styles.detailLabel}>{"10/12/1985"}</Text>
            </View>
          </View>
        </View>

        <View style={styles.insuranceContainer}>
          <Text style={styles.containerTitle}>Insurance</Text>
          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.providerCarrierInput}
              placeholder="Provider & carrier"
              value=""
            />
            <TextInput
              style={styles.memberIdInput}
              placeholder={"Member ID"}
              value=""
            />
            <TouchableOpacity style={styles.cameraButton}>
              <CameraIcon />
            </TouchableOpacity>
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

        <TouchableOpacity style={styles.signOutButton}>
          <Text style={styles.signOutButtonText}>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  listContainer: {
    alignItems: "center",
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
    marginTop: 13,
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
