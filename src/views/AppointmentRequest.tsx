import React, { useRef, useMemo } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import BottomSheet from '@gorhom/bottom-sheet';
import ArrowLeft from "../icons/ArrowLeft";
import HeyZoeIcon from "../icons/HeyZoe";
import MenuHandle from "../components/MenuHandle";
import ArrowUp from "../icons/ArrowUp";
import ArrowDown from "../icons/ArrowDown";
import { ScrollView } from "react-native-gesture-handler";
import NeckIcon from "../icons/Neck";
import CalendarIcon from "../icons/Calendar";
import ClockIcon from "../icons/Clock";
import ArrowRight from "../icons/ArrowRight";

function AppointmentRequest({ navigation }: any) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['88%'], []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ArrowLeft />
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <HeyZoeIcon />
          </View>
        </View>
      </SafeAreaView>
      
      
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enableOverDrag={false}
        enablePanDownToClose={false}
        handleComponent={() => <MenuHandle />}
        footerComponent={() => (
          <TouchableOpacity style={styles.footer}>
            <Text style={styles.footerText}>Next</Text>
            <ArrowRight color="white" />
          </TouchableOpacity>
        )}
        style={styles.contentContainerModal}
        backgroundStyle={{
          backgroundColor: "#FAF9F8",
        }}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Appointment Request</Text>
          <View style={styles.userContainer}>
            <View style={styles.userPictureContainer}>
              <Text style={styles.userPictureName}>MD</Text>
            </View>
            <Text style={styles.userName}>Matt Doyle</Text>
          </View>

          <View style={styles.conditionsList}>
            <View style={styles.conditionsScrollContainer}>
              <ScrollView horizontal style={{ flex: 1 }}>
                <View style={styles.conditionContainer}>
                  <NeckIcon />
                  <Text style={styles.conditionName}>Neck</Text>
                </View>
              </ScrollView>
            </View>
            <View style={styles.arrowsContainer}>
              <ArrowUp size="15" />
              <ArrowDown size="15" />
            </View>
          </View>

          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <CalendarIcon size="20" />
              <Text style={styles.inputLabel}>05/05/23</Text>
              <View style={styles.arrowsContainer}>
                <ArrowUp size="15" />
                <ArrowDown size="15" />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <ClockIcon size="15" color="#22282F" />
              <Text style={styles.inputLabel}>Morning</Text>
              <View style={styles.arrowsContainer}>
                <ArrowUp size="15" />
                <ArrowDown size="15" />
              </View>
            </View>
          </View>
        </View>
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF5",
  },
  header: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 23,
    marginTop: 20,
  },
  logoContainer: {
    marginLeft: 20,
  },
  contentContainerModal: {
    elevation: 20,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 23,
  },
  title: {
    fontSize: 20,
    color: "#0C1D4F",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
  },
  userContainer: {
    width: "100%",
    paddingHorizontal: 22,
    paddingVertical: 17,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 30,
    borderRadius: 15,
    elevation: 20,
    shadowColor: "rgba(0, 0, 0, 0.4)"
  },
  userPictureContainer: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: "#B1C3FA",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },
  userPictureName: {
    color: "#213B8C",
    fontSize: 15,
    fontWeight: "600",
  },
  userName: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },
  conditionsList: {
    width: "100%",
    paddingHorizontal: 9,
    paddingVertical: 7,
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 5,
    marginTop: 20,
  },
  conditionsScrollContainer: {
    flex: 1,
    marginRight: 10,
  },
  conditionContainer: {
    flexDirection: "row",
    height: "100%",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 90,
    backgroundColor: "#F3F0FF",
  },
  conditionName: {
    color: "#5837E8",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 9,
  },
  arrowsContainer: {
    width: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputsContainer: {
    flexDirection: "row",
    gap: 13,
    marginTop: 20,
  },
  inputContainer: {
    flex: 1,
    height: 45,
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EEE",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 11,
  },
  inputLabel: {
    marginLeft: 11,
    color: "black",
    fontSize: 11,
    fontWeight: "500",
    marginRight: "auto",
  },
  footer: {
    backgroundColor: "black",
    height: 91,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 47,
    justifyContent: "space-between", 
  },
  footerText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default AppointmentRequest;
