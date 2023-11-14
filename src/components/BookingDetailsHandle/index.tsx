import { BottomSheetHandleProps } from "@gorhom/bottom-sheet";
import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function BookingDetailsHandle(): JSX.Element {
  return (
    <TouchableOpacity style={styles.container}>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "red",
    height: 20,
  },
});

export default BookingDetailsHandle;
