import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

function DiscoverView(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>Discover view</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  discoverContainer: {
    height: "100%",
  },
});

export default DiscoverView;
