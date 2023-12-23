import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useAuth, login } from "@frontegg/react-native";
import Application from "./Application";

function Authless() {
  const {
    initializing,
    showLoader,
    isLoading,
    isAuthenticated,
  } = useAuth();

  useEffect(() => {
    if (!initializing && !isAuthenticated) {
      // login();
    }
  }, [initializing, isAuthenticated, isLoading]);

  if (showLoader || isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator
          size="small"
          color="#36237D"
        />
      </SafeAreaView>
    );
  }

  /* if (!initializing && !isLoading && !isAuthenticated) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Not authenticated</Text>
        <TouchableOpacity
          onPress={login}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  } */

  return <Application />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#36237D",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Authless;
