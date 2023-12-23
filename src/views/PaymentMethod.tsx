import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import BackButton from "../components/BackButton";
import ArrowRight from "../icons/ArrowRight";
import CreditCardOutlinedIcon from "../icons/CreditCardOutlined";

export default function PaymentMethod({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <BackButton
          onPress={() => navigation.goBack()}
        />
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Card Number</Text>
            <View style={styles.cardInputContainer}>
              <TextInput
                style={[styles.input, styles.cardInput]}
                value=""
              />
              <View style={styles.creditCardIconContainer}>
                <CreditCardOutlinedIcon />
              </View>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.rowInputs}>
              <View style={{ flex: 1 }}>
                <Text style={styles.inputLabel}>EXP.Date</Text>
                <TextInput
                  style={[styles.input, styles.normalInput, { borderTopRightRadius: 0, borderBottomRightRadius: 0 }]}
                  placeholder="MM/YY"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.inputLabel, { marginLeft: 15 }]}>CVV</Text>
                <TextInput
                  style={[styles.input, styles.normalInput, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0, backgroundColor: "lightgray" }]}
                  placeholder="123"
                />
              </View>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Zip Code</Text>
            <TextInput
              style={[styles.input, styles.normalInput]}
              placeholder="556773"
              value=""
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
        <ArrowRight color="white" />
      </TouchableOpacity>
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
  inputContainer: {
    marginBottom: 19,
  },
  inputLabel: {
    fontSize: 11,
    color: "black",
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 5,
    marginTop: 13,
    width: "100%",
  },
  cardInputContainer: {
    position: "relative",
  },
  cardInput: {
    zIndex: 1,
    paddingLeft: 50,
  },
  creditCardIconContainer: {
    position: "absolute",
    zIndex: 2,
    top: 26,
    left: 15,
  },
  rowInputs: {
    flexDirection: "row",
  },
  normalInput: {
    paddingLeft: 15,
  },
  saveButton: {
    width: "100%",
    height: 91,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 32,
  },
  saveButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});
