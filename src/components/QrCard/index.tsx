import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import ZoeLogoIcon from "../../icons/ZoeLogo";
import { toDp } from "../../utils/sizes";

type Props = {
  onPress?: () => void;
}

function QrCard(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
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
            source={require("../../assets/qr.png")}
          />
        </View>
        <Text style={styles.qrNumber}>ID 273937783</Text>
      </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    fontSize: toDp(9),
    fontWeight: "normal",
    marginTop: 15,
    fontFamily: "PPSupplyMono-Regular"
  },
})

export default QrCard;