import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import ChatRow, { ChatRowType } from "../components/Chat/ChatRow";
import ViewHeader from "../components/ViewHeader";

function ChatView({ navigation }: any): JSX.Element {
  return (
    <SafeAreaView style={styles.chatContainer}>
      <ScrollView>
        <ViewHeader title="Chat" />

        <View style={styles.chatsContainer}>
          <ChatRow
            type={ChatRowType.SENDER}
            name="Tom Smith"
            profile="Colorado Sports Doctor"
            onPress={() => navigation.navigate("ChatRoom")}
          />
          <ChatRow
            type={ChatRowType.USER}
            name="Matt Doyle"
            profile="Colorado Sports Doctor"
            onPress={() => navigation.navigate("ChatRoom")}
          />
          <ChatRow
            type={ChatRowType.USER}
            name="Matt Doyle"
            profile="Colorado Sports Doctor"
            onPress={() => navigation.navigate("ChatRoom")}
          />
          <ChatRow
            type={ChatRowType.USER}
            name="Matt Doyle"
            profile="Colorado Sports Doctor"
            onPress={() => navigation.navigate("ChatRoom")}
          />
          <ChatRow
            type={ChatRowType.USER}
            name="Matt Doyle"
            profile="Colorado Sports Doctor"
            onPress={() => navigation.navigate("ChatRoom")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: "white",
    height: "100%",
  },
  chatsContainer: {
    width: "100%",
    marginTop: 26,
  },
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
    backgroundColor: "#F6C3B0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 19,
  },
  chatProfileLabel: {
    color: "#956D5E",
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
});

export default ChatView;
