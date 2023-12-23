import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import BackButton from "../components/BackButton";
import ArrowRight from "../icons/ArrowRight";
import CloseIcon from "../icons/Close";
import PenIcon from "../icons/Pen";

export default function AmexPaymentMethod({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <BackButton
          onPress={() => navigation.goBack()}
        />
        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>American Express</Text>
            <Image
              style={styles.amexImage}
              source={require("../assets/amex.png")}
            />
          </View>
          <Text style={styles.prefixedCardNumberText}>****1002</Text>
          <Text style={styles.expiryDateText}>Expiry date</Text>
          <Text style={styles.expiryDateValueText}>06/2026</Text>

          <TouchableOpacity style={styles.editButton}>
            <PenIcon color="black" size="18" />
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.removeButton}>
            <View style={styles.closeIconContainer}>
              <CloseIcon color="white" size="10" />
            </View>
            <Text style={styles.removeButtonText}>Remove payment method</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 36,
  },
  formContainer: {
    marginTop: 40,
    marginBottom: "auto",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 32,
    fontWeight: "600",
  },
  amexImage: {
    width: 38,
    height: 24,
  },
  prefixedCardNumberText: {
    fontSize: 15,
    color: "#0C1D4F",
    fontFamily: "PPSupplyMono-Regular",
    marginTop: 10,
    marginBottom: 20,
  },
  expiryDateText: {
    fontSize: 11,
    color: "#0C1D4F",
    fontFamily: "PPSupplyMono-Regular",
  },
  expiryDateValueText: {
    fontSize: 15,
    color: "#0C1D4F",
    fontFamily: "PPSupplyMono-Regular",
    marginBottom: 30,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
    height: 60,
  },
  editButtonText: {
    color: "black",
    fontSize: 14,
    marginLeft: 11,
  },
  removeButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  closeIconContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#EF2222",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  removeButtonText: {
    color: "#EF2222",
    fontSize: 14,
    fontWeight: "500",
  },
});
