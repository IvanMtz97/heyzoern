import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Filter from "../../icons/Filter";
import SearchIcon from "../../icons/Search";
import { toDp } from "../../utils/sizes";

function Search() {
  return (
    <View style={styles.filterContainer}>
      <View style={styles.inputsContainer}>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Conditions</Text>
          <TextInput
            style={styles.filterInput}
            placeholder="e.g. Hip Pin"
          />
        </View>

        <View style={styles.inputsDivider} />

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Location</Text>
          <TextInput
            style={styles.filterInput}
            placeholder="e.g. Texas"
          />
        </View>

        <TouchableOpacity style={styles.inputsSearchButton}>
          <SearchIcon />
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.filterButton}>
        <Filter />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    width: "100%",
    flexDirection: "row",
    height: 166,
    borderBottomWidth: 1,
    borderBottomColor: "#EAE6DE",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 26,
    justifyContent: "space-between",
  },
  inputsContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    height: toDp(65),
    borderWidth: 1,
    borderColor: "#EAE6DE",
    borderRadius: 10000,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    paddingRight: 8,
    paddingLeft: 18,
  },
  inputContainer: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 10,
    justifyContent: "center",
    paddingTop: 8,
  },
  inputLabel: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
  },
  filterInput: {
    fontSize: 12,
    height: 40,
  },
  inputsDivider: {
    width: 1,
    backgroundColor: "#E4E4E4",
    height: "60%"
  },
  inputsSearchButton: {
    width: 42,
    height: 42,
    backgroundColor: "#5837E8",
    borderRadius: 42,
    alignItems: "center",
    justifyContent: "center",
  },
  filterButton: {
    width: 33,
    height: 33,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#CEC9BE",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    marginLeft: 10,
  },
});

export default Search;
