import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from 'react-native-linear-gradient';
import GradientText from "../components/GradientText";
import ProfileButton from "../components/ProfileButton";

function BiomarkersForm({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[
          "#FFEEDC",
          "#D6E7FC",
        ]}
        style={styles.gradientContainer}
      >
        <ScrollView
          style={styles.scrollContainer}
        >

          <View
            style={styles.welcomeContainer}
          >
            <GradientText colors={["#6243E9", "#392685", "#392685"]} style={styles.welcomeTitle}>Hey, Matthew</GradientText>
            <ProfileButton onPress={() => navigation.navigate("Profile")} />
          </View>
          <Text style={styles.subtitle}>Add your bio Markers</Text>
          <View style={styles.formContainer}>
            <Text style={styles.inputLabel}>Insulin</Text>
            <TextInput
              placeholder="Insulin"
              style={styles.input}
            />
            <Text style={styles.inputLabel}>Glucose</Text>
            <TextInput
              placeholder="Glucose"
              style={styles.input}
            />
            <Text style={styles.inputLabel}>hsCRP</Text>
            <TextInput
              placeholder="hsCRP"
              style={styles.input}
            />
            <Text style={styles.inputLabel}>Cholesterol, Total</Text>
            <TextInput
              placeholder="Cholesterol"
              style={styles.input}
            />
            <Text style={styles.inputLabel}>HDL Chol</Text>
            <TextInput
              placeholder="HDL"
              style={styles.input}
            />
            <Text style={styles.inputLabel}>Albumin</Text>
            <TextInput
              placeholder="Albumin"
              style={styles.input}
            />
            <Text style={styles.inputLabel}>HbA1c -Hemoglobin</Text>
            <TextInput
              placeholder="HbA1c"
              style={styles.input}
            />
            <Text style={styles.inputLabel}>Triglycerides</Text>
            <TextInput
              placeholder="Triglycerides"
              style={styles.input}
            />
            <Text style={styles.inputLabel}>Creatinine</Text>
            <TextInput
              placeholder="Creatinine"
              style={styles.input}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  welcomeContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  welcomeTitle: {
    color: "#6243e9",
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "black",
    fontSize: 32,
    fontWeight: "500",
    marginTop: 5,
  },
  formContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 28,
    paddingVertical: 25,
    paddingHorizontal: 24,
    marginTop: 28,
    marginBottom: 18,
  },
  inputLabel: {
    color: "black",
    fontSize: 11,
    fontWeight: "500",
    marginBottom: 13,
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 5,
    paddingLeft: 17,
    paddingVertical: 15,
    marginBottom: 23,
  },
});

export default BiomarkersForm;
