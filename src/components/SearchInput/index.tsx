import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SearchIcon from "../../icons/Search";

function SearchInput(): JSX.Element {
  const [searchText, setSearchText] = React.useState("");


  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Conditions, or procedures"
      />
      <View style={styles.searchButtonContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 1000,
    backgroundColor: "white",
    elevation: 20, // Android
  },
  input: {
    paddingLeft: 40,
    paddingRight: 60,
  },
  searchButtonContainer: {
    backgroundColor: "#6243E9",
    width: 42,
    height: 42,
    borderRadius: 42,
    position: "absolute",
    right: 11,
    elevation: 4,
  },
  searchButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchInput;
