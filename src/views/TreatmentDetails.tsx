import React, { useRef, useMemo, useState, useCallback } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import ArrowLeft from "../icons/ArrowLeft";
import MenuHandle from "../components/MenuHandle";
import Accordion from "../components/Accordion";

function TreatmentDetails({ navigation }: any) {
  const [status, setStatus] = useState(1);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['45%', '83%'], []);

  const handleSheetStatusChange = useCallback((status: number) => {
    setStatus(status);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={[styles.gradientCardContainer, { height: status === 1 ? 150 : "55%" }]}
        colors={[
          "#D6E7FC",
          "#FFEEDC",
        ]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </TouchableOpacity>
        <View style={styles.treatmentImageContainer}>
          <Image
            style={styles.treatmentImage}
            resizeMode="contain"
            source={require("../assets/treatment.png")}
          />
        </View>
      </LinearGradient>
      
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        enableOverDrag={false}
        onChange={handleSheetStatusChange}
        enablePanDownToClose={false}
        handleComponent={() => <MenuHandle />}
        style={styles.contentContainerModal}
        backgroundStyle={{
          backgroundColor: "#FAF9F8",
        }}
      >
        <BottomSheetScrollView contentContainerStyle={styles.scrollContentContainer}>
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>In Stock</Text>
          </View>

          <Text style={styles.title}>PRP Injections</Text>
          <Text style={styles.price}>$1150</Text>
          <Text style={styles.promo}>As low as $47.92/mo</Text>
          <Text style={styles.body}>
            Getting psychiatric care for anxiety and depression has never been more convenient. Consult with a healthcare provider through our platform to determine whether a medication like escitalopram could be right for you.
          </Text>

          <View style={styles.topContainer}>
            <TouchableOpacity style={styles.promoButton}>
              <Text style={styles.promoText}>Subscribe</Text>
              <Text style={styles.promoValue}>10% off</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.promoButton}>
              <Text style={styles.promoText}>One-time purchase</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.promoButton, { paddingHorizontal: 26, marginTop: 20, marginBottom: 20 }]}>
            <Text style={[styles.promoText, { marginRight: "auto" }]}>Pack of 3</Text>
            <Text style={styles.promoText}>$62.50</Text>
          </TouchableOpacity>

          <Accordion noPadding title="What's Included" isExpanded={false} onPress={console.log}>
            <Text>Test</Text>
          </Accordion>

          <Accordion noPadding title="Treatment Descriptions" isExpanded={false} onPress={console.log}>
            <Text>Test</Text>
          </Accordion>

          <Text style={styles.disclaimer}>
            *Only available if prescribed after an online consultation with a healthcare provider
          </Text>

          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buyNowButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  treatmentImageContainer: {
    width: "100%",
    height: 290,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  treatmentImage: {
    width: 290,
  },
  gradientCardContainer: {
    paddingHorizontal: 23,
    paddingTop: 20,
  },
  contentContainerModal: {
    elevation: 20,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollContentContainer: {
    paddingHorizontal: 23,
  },
  tagContainer: {
    width: 68,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FFAC",
    marginTop: 10,
  },
  tagText: {
    fontSize: 10,
    color: "black",
    fontWeight: "600",
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "600",
    marginTop: 20,
  },
  price: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
  },
  promo: {
    color: "#5D5D5D",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
  },
  body: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 20,
  },
  topContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 40,
  },
  promoButton: {
    flex: 1,
    height: 59,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  promoText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  promoValue: {
    fontSize: 14,
    color: "#7496FF",
    fontWeight: "500",
    marginLeft: 2,
  },
  disclaimer: {
    color: "#8C8C8C",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 20,
  },
  buyNowButton: {
    backgroundColor: "black",
    width: "100%",
    height: 47,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buyNowButtonText: {
    color: "white",
    fontSize: 11,
    fontWeight: "600",
  },
});

export default TreatmentDetails;
