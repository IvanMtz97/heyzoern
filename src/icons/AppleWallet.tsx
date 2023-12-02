import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";

const AppleWallet = (props: any) => (
  <View style={styles.container}>
    <Image
      style={styles.walletImage}
      source={require("../assets/appleWalletIcon.png")}
    />
    <View style={styles.textsContainer}>
      <Text style={styles.firstLineText}>Add to</Text>
      <Text style={styles.secondLineText}>Apple Wallet</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: 140,
    height: 43,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  walletImage: {
    width: 35,
    height: 25,
  },
  textsContainer: {
    marginLeft: 10,
  },
  firstLineText: {
    color: "white",
    fontSize: 10,
  },
  secondLineText: {
    color: "white",
    fontSize: 12,
    fontWeight: "400",
  },
});

export default AppleWallet;
