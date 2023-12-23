import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import useCompanies from "../../hooks/useCompanies";
import CloseIcon from "../../icons/Close";
import { SanityListingCompany } from "../../types/Company";
import ArrowRight from "../../icons/ArrowRight";

function DrawerContent(props: any) {
  const route = useRoute<any>();
  const { id } = route.params;
  const { isLoading, fetchCompany } = useCompanies();
  const [company, setCompany] = useState<SanityListingCompany>();

  useEffect(() => {
    fetchCompany(id).then((company) => {
      setCompany(company);
    });
  }, [fetchCompany]);
  console.log("DRAWER CONTENT RR", company)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTopContainer}>
          <Image
            style={styles.logo} 
            source={{ uri: company?.logo?.url }}
            resizeMode="contain"
          />

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => props.navigation.closeDrawer()}
          >
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Your free online visit starts here</Text>
        <Text>Tell us what we can help you with:</Text>
      </View>
      <ScrollView
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContentContainer}
      >
        {company?.conditions.map((condition: string) => (
          <TouchableOpacity
            key={condition}
            style={styles.categoryContainer}
            onPress={() => {
              props.navigation.navigate("DirectoryTreatmentDetails")
            }}
          >
            <Text style={styles.categoryTitle}>{condition}</Text>
            <ArrowRight color="#0C1D4F" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    backgroundColor: "#FFFAF5",
    height: 169,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  headerTopContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 73,
    height: 24,
  },
  closeButton: {
    backgroundColor: "white",
    width: 31,
    height: 31,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#0C1D4F",
    fontFamily: "TestCalibre-Medium",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 20,
  },
  categoriesContainer: {
    flex: 1,
  },
  categoriesContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  categoryContainer: {
    width: "100%",
    height: 53,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    alignItems: "center",
  },
  categoryTitle: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default DrawerContent;
