import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import ArrowRight from "../../icons/ArrowRight";
import Pin from "../../icons/Pin";
import Speaker from "../../icons/Speaker";

type LocationsListProps = {
  onLocationPress: () => void;
}

type LocationProps = {
  onViewListingPress: () => void;
}

function Location(props: LocationProps) {
  return (
    <View style={styles.locationContainer}>
        <View style={styles.locationTitleContainer}>
          <Text style={styles.locationTitle}>Renegade Health OKC</Text>
        </View>
        <View style={styles.locationImageContainer}>
          <Image
            style={styles.locationImage}
            resizeMode="contain"
            source={require("../../assets/doctors.jpg")}
          />
        </View>
        <View style={styles.conditionsTreatedContainer}>
          <Speaker color="#101d4c" />
          <Text style={styles.conditionsTreatedText}>Conditions Treated</Text>
        </View>
        <ScrollView
          horizontal
          style={styles.conditionsTagsScroll}
          contentContainerStyle={{ height: 39 }}
        >
          <View style={styles.conditionTagContainer}>
            <Text style={styles.conditionTagText}>Cardiac</Text>
          </View>
          <View style={styles.conditionTagContainer}>
            <Text style={styles.conditionTagText}>Nutrition</Text>
          </View>
          <View style={styles.conditionTagContainer}>
            <Text style={styles.conditionTagText}>Medical Weightloss</Text>
          </View>
        </ScrollView>

        <View style={styles.locationDirectionContainer}>
          <Pin color="#101d4c" size="20" />
          <Text style={styles.locationDirectionText}>Oklahoma</Text>
          
          <TouchableOpacity style={styles.viewListingContainer} onPress={props.onViewListingPress}>
            <Text style={styles.viewListingText}>View listing</Text>
            <ArrowRight color="#6751e1" />
          </TouchableOpacity>
        </View>
      </View>
  );
}

function LocationsList(props: LocationsListProps) {
  return (
    <View style={styles.locationsContainer}>

      <Location onViewListingPress={props.onLocationPress} />
      <Location onViewListingPress={props.onLocationPress} />
      <Location onViewListingPress={props.onLocationPress} />
      <Location onViewListingPress={props.onLocationPress} />

    </View>
  );
}

const styles = StyleSheet.create({
  locationsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  locationContainer: {
    width: "100%",
    height: 480,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EAE6DE",
    marginBottom: 40,
    backgroundColor: "white",
    overflow: "hidden",
  },
  locationTitleContainer: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "TestCalibre-Medium",
    color: "#101d4c",
  },
  locationImageContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  locationImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  conditionsTreatedContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 25,
  },
  conditionsTreatedText: {
    fontSize: 14,
    color: "#101d4c",
    fontWeight: "500",
    fontFamily: "TestCalibre-Medium",
    marginLeft: 5,
  },
  conditionsTagsScroll: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  conditionTagContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#101d4c",
    marginRight: 10,
    height: 39,
  },
  conditionTagText: {
    color: "#101d4c",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.5,
  },
  locationDirectionContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#EAE6DE",
  },
  locationDirectionText: {
    color: "#101d4c",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.5,
    marginLeft: 8,
  },
  viewListingContainer: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  viewListingText: {
    color: "#6751e1",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.5,
  },
});

export default LocationsList;
