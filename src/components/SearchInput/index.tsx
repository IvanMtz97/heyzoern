import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import SearchIcon from "../../icons/Search";

function SearchInput(): JSX.Element {
  const [searchText, setSearchText] = React.useState("");


  return (
    <View style={styles.inputContainer}>
      <Image
        style={styles.starsImage}
        source={require("../../assets/Stars.png")}
      />
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
    position: "relative",
  },
  input: {
    paddingLeft: 60,
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
  starsImage: {
    position: "absolute",
    zIndex: 2,
    left: 20,
  },
});

export default SearchInput;
