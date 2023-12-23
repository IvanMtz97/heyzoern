import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { useAuth } from "@frontegg/react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import { format } from "date-fns";
import ZoeLogoIcon from "../../icons/ZoeLogo";
import { toDp } from "../../utils/sizes";

type Props = {
  onPress?: () => void;
}

function QrCard(props: Props) {
  const { user } = useAuth();
  console.log("USER", user);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.gradientView}>
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
            {/* <Text style={styles.gradientCardDate}>Joined {format(new Date(user?.activeTenant.createdAt + ""), "MMMM d, yyyy")}</Text> */}
            <Text style={styles.gradientCardName}>{user?.name}</Text>
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
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradientView: {
    width: "100%",
    height: 238,
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 20,
  },
  gradientCardContainer: {
    flex: 1,
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
