import React from "react";
import {
  Text,
  StyleSheet,
  View, TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "@frontegg/react-native";
import { getNameInitials } from "../../utils/user";

type ViewHeaderProps = {
  title: string;
};

function ViewHeader({ title }: ViewHeaderProps): JSX.Element {
  const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile" as never)}
          style={styles.profileButton}
        >
          <Text style={styles.profileText}>{getNameInitials(user?.name + "")}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  documentsContainer: {
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 19,
    paddingTop: 39,
    alignItems: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 40,
    fontWeight: "600",
  },
  profileButton: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: "#B1C3FA",
    alignItems: "center",
    justifyContent: "center",
  },
  profileText: {
    fontSize: 15,
    color: "#213B8C",
    fontWeight: "600",
  },
});


export default ViewHeader;
