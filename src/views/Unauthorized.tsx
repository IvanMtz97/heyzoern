
import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@frontegg/react-native";

function UnauthorizedView(): JSX.Element {
  const navigation = useNavigation();
  const { login, isAuthenticated, initializing, isLoading } = useAuth();

  useEffect(() => {
    if (!initializing && !isLoading && isAuthenticated) {
      navigation.navigate("Home");
    }
  }, [isAuthenticated, initializing, isLoading]);

  if (isLoading || initializing) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size={"small"}/>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.unauthorizedContainer}>
        <Text>You need to sign in</Text>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={login}
        >
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  unauthorizedContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  signInButton: {
    width: 100,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#6243E9",
    marginTop: 10,
  },
  signInButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UnauthorizedView;
