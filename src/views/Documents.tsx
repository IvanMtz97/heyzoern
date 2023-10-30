import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Document from "../components/Document";
import ViewHeader from "../components/ViewHeader";
import CalendarNote from "../icons/CalendarNote";
import ChatOutlinedIcon from "../icons/ChatOutlined";
import RightIcon from "../icons/Right";

const documents = [
  {
    name: "Bloodwork_mattjones.PDF",
    authors: [{
      name: "Matt Doyle",
    }, {
      name: "Andrew Patterson",
    }, {
      name: "Test 2",
    }, {
      name: "Test 3",
    }],
  },
  {
    name: "CTScan",
    authors: [],
  },
];

function DocumentsView(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView style={styles.documentsContainer}>
        <ViewHeader title="Documents" />
        <View style={styles.contentContainer}>
          <Text style={styles.requestsLabel}>Requests</Text>
          <View style={styles.documentContainer}>
            <Text style={styles.documentTitle}>Colorado Sports Doctor</Text>
            <TouchableOpacity style={styles.patientOnboardingContainer}>
              <View style={styles.patientOnboardingTextContainer}>
                <CalendarNote />
                <Text style={styles.patientOnboardingLabel}>Patient onboarding</Text>
              </View>
              <View style={styles.patientOnboardingButton}>
                <RightIcon />
              </View>
            </TouchableOpacity>
            <View style={styles.patientDetailsContainer}>
              <View style={styles.patientDetailsTextsContainer}>
                <View style={styles.patientProfileCircle}>
                  <Text style={styles.patientProfileInitials}>MD</Text>
                </View>
                <View style={styles.patientNameContainer}>
                  <Text style={styles.patientName}>Matt Doyle</Text>
                  <Text style={styles.patientDate}>Today, 10:00 AM</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.chatButton}>
                <ChatOutlinedIcon />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.yourDocumentsHeaderContainer}>
            <Text style={styles.yourDocumentsHeaderLabel}>Your documents</Text>
            <TouchableOpacity style={styles.yourDocumentsAddButton}>
              <Text style={styles.plusText}>+</Text>
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.documentsList}>

            {documents.map((d) => (
              <Document name={d.name} authors={d.authors} />
            ))}

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  documentsContainer: {
    height: "100%",
  },
  contentContainer: {
    paddingHorizontal: 19,
  },
  requestsLabel: {
    marginTop: 39,
    color: "black",
    fontSize: 20,
    fontWeight: "600",
  },
  documentContainer: {
    marginTop: 33,
    width: "100%",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderWidth: 1,
    borderColor: "#EAE6DE",
    borderRadius: 20,
    backgroundColor: "white",
  },
  documentTitle: {
    color: "black",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 10,
  },
  patientOnboardingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 7,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#EAE6DE",
    height: 39,
  },
  patientOnboardingTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  patientOnboardingLabel: {
    marginLeft: 7,
    color: "#6243E9",
    fontWeight: "500",
  },
  patientOnboardingButton: {
    width: 26,
    height: 26,
    backgroundColor: "#DCD3FF",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  patientDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 9,
  },
  patientDetailsTextsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  patientProfileCircle: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: "#B1C3FA",
    alignItems: "center",
    justifyContent: "center",
  },
  patientProfileInitials: {
    color: "#213B8C",
    fontWeight: "600",
    fontSize: 15,
  },
  patientNameContainer: {
    marginLeft: 15,
  },
  patientName: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
  },
  patientDate: {
    color: "black",
    fontSize: 12,
    fontWeight: "400",
  },
  chatButton: {
    width: 68,
    height: 49,
    borderRadius: 70,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  yourDocumentsHeaderContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 53,
  },
  yourDocumentsHeaderLabel: {
    color: "black",
    fontWeight: "600",
    fontSize: 20,
  },
  yourDocumentsAddButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
    backgroundColor: "black",
    borderRadius: 7,
    height: 31,
    width: 85,
  },
  plusText: {
    color: "white",
    fontSize: 20,
  },
  addText: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    marginLeft: 14,
  },
  documentsList: {
    gap: 22,
    marginVertical: 33,
  },
});

export default DocumentsView;
