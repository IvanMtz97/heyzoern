import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

export enum ChatRowType {
  USER,
  SENDER,
};

export type ChatRowProps = {
  type: ChatRowType;
  name: string;
  profile: string;
};

function ChatRow({ type, name, profile }: ChatRowProps) {
  const initials = name.split(" ");

  return (
    <TouchableOpacity style={styles.chatRow}>
      <View
        style={[
          styles.chatProfileContainer,
          { backgroundColor: type === ChatRowType.SENDER ? "#F6C3B0" : "#B1C3FA"},
        ]}
      >
        <Text
          style={[
            styles.chatProfileLabel,
            { color: type === ChatRowType.SENDER ? "#956D5E" : "#213B8C"},
          ]}>
            {initials[0][0]}{initials[1][0]}
        </Text>
      </View>
      <View style={styles.chatDetailsContainer}>
        <View style={styles.chatNameContainer}>
          <Text style={styles.chatName}>{name}</Text>
        </View>
        <View style={styles.chatProfessionContainer}>
          <Text style={styles.chatName}>{profile}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chatRow: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  chatProfileContainer: {
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 19,
  },
  chatProfileLabel: {
    fontSize: 15,
    fontWeight: "600",
  },
  chatDetailsContainer: {
    height: "100%",
    marginLeft: 26,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#DCDCDC",
  },
  chatNameContainer: {
    height: "100%",
    justifyContent: "center",
    width: "50%",
  },
  chatProfessionContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  chatName: {
    color: "black",
    fontSize: 12,
    fontWeight: "500",
  },
})

export default ChatRow;
