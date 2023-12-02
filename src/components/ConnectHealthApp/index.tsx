import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";
import ChevronRightIcon from "../../icons/ChevronRight";

type Props = {
  onPress: () => void;
}

function ConnectHealthApp(props: Props): JSX.Element {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.connectContainer}>
      <View style={styles.healthAppImageContainer}>
        <Image
          style={styles.healthAppImage}
          source={require("../../assets/healthAppHeart.png")}
        />
      </View>
      <Text style={styles.label}>Connect Health app for better insight</Text>
      <ChevronRightIcon />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  connectContainer: {
    backgroundColor: "white",
    height: 52,
    borderRadius: 12,
    borderColor: "#EAE6DE",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 13,
    paddingRight: 20,
    marginTop: 22,
  },
  healthAppImageContainer: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    borderRadius: 7,
    position: "relative",
  },
  healthAppImage: {
    width: 20,
    height: 15,
    position: "relative",
    left: 11,
    bottom: -4,
  },
  label: {
    color: "black",
    fontSize: 12,
    fontWeight: "400",
    marginLeft: 19,
    marginRight: "auto",
  },
});

export default ConnectHealthApp;
