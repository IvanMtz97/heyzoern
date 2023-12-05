import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../components/BackButton";
import QrCard from "../components/QrCard";
import { toDp } from "../utils/sizes";

function QrView({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.qrContainer}>
        <QrCard />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.holdQrContainer}>
          <Image
            source={require("../assets/holdQr.png")}
          />
        </View>
          <Text style={styles.disclaimer}>Hold Near for scan</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: toDp(20),
    paddingHorizontal: toDp(20),
  },
  qrContainer: {
    width: "100%",
    paddingHorizontal: toDp(20),
    marginTop: toDp(29),
  },
  bottomContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: toDp(63),
  },
  holdQrContainer: {
    width: toDp(100),
    height: toDp(100),
    borderRadius: toDp(100),
    borderWidth: toDp(6),
    borderColor: "#3A2687",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    margin: "auto",
  },
  disclaimer: {
    color: "#8D8D8D",
    fontSize: toDp(20),
    fontFamily: "TestCalibre-Medium",
    marginTop: toDp(20),
  },
});

export default QrView;
