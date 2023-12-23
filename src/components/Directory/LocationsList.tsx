import React, { useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import useCompanies from "../../hooks/useCompanies";
import ArrowRight from "../../icons/ArrowRight";
import Pin from "../../icons/Pin";
import Speaker from "../../icons/Speaker";

type LocationsListProps = {
  onLocationPress: (companyId: string) => void;
}

type LocationProps = {
  _id: string;
  name: string;
  thumbnailUrl: string;
  conditions: string[];
  state: string;
  onViewListingPress: (companyId: string) => void;
}

function Location(props: LocationProps) {
  const handleViewListingPress = useCallback(() => {
    props.onViewListingPress(props._id);
  }, []);

  return (
    <View style={styles.locationContainer}>
        <View style={styles.locationTitleContainer}>
          <Text style={styles.locationTitle}>{props.name}</Text>
        </View>
        <View style={styles.locationImageContainer}>
          <Image
            style={styles.locationImage}
            source={{ uri: props.thumbnailUrl }}
          />
        </View>
        <View style={styles.conditionsContainer}>
          <View style={styles.conditionsTreatedContainer}>
            <Speaker color="#101d4c" />
            <Text style={styles.conditionsTreatedText}>Conditions Treated</Text>
          </View>
          <ScrollView
            horizontal
            style={styles.conditionsTagsScroll}
            contentContainerStyle={styles.conditionsTagsContainer}
          >
            {props.conditions.map((condition) => (
              <View
                key={condition}
                style={styles.conditionTagContainer}
              >
                <Text style={styles.conditionTagText}>{condition}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.locationDirectionContainer}>
          <Pin color="#101d4c" size="20" />
          <Text style={styles.locationDirectionText}>{props.state}</Text>
          
          <TouchableOpacity
            style={styles.viewListingContainer}
            onPress={handleViewListingPress}
          >
            <Text style={styles.viewListingText}>View listing</Text>
            <ArrowRight color="#6751e1" />
          </TouchableOpacity>
        </View>
      </View>
  );
}

function LocationsList(props: LocationsListProps) {
  const {
    companies,
    isLoading,
    fetchCompanies,
  } = useCompanies();

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);
  console.log("COMPANIES", companies)
  return (
    <View style={styles.locationsContainer}>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#6751e1"
          size="large"
        />
      )}
      {companies.map((company) => (
        <Location
          key={company._id}
          _id={company._id}
          name={company.name}
          thumbnailUrl={company.thumbnail.url}
          conditions={company.conditions}
          state={company.address.state}
          onViewListingPress={props.onLocationPress}
        />
      ))}
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
  conditionsContainer: {
    height: 110,
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
    flex: 1,
    marginTop: 10,
  },
  conditionsTagsContainer: {
    paddingHorizontal: 20,
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
    width: "100%",
    height: 60,
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
