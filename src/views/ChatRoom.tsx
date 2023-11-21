import React, { useRef, useMemo, useCallback, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import BackIcon from "../icons/Back";
import SendIcon from "../icons/Send";
import SideMenuIcon from "../icons/SideMenu";
import VideoIcon from "../icons/Video";

function ChatRoomView({ navigation }: any): JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <BackIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileContainer}>
            <Text style={styles.profileText}>EP</Text>
          </TouchableOpacity>
          <Text style={styles.userName}>Eric Peterson</Text>
          <TouchableOpacity style={styles.videoButton}>
            <VideoIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ChatDetails")} style={styles.sideMenuButton}>
            <SideMenuIcon />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Message Eric Peterson"
          value=""
        />
        <View style={styles.messageButtonsContainer}>
          <TouchableOpacity style={styles.plusButton}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>

          <View style={styles.sendButton}>
            <TouchableOpacity style={styles.sendButtonPress}>
              <SendIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FAF9F8",
  },
  container: {
    flex: 1,
    backgroundColor: "#FAF9F8",
    position: "relative",
  },
  header: {
    width: "100%",
    height: 63,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 40,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    width: 38,
    height: 38,
    borderRadius: 38,
    backgroundColor: "#FBE9E0",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    color: "#6C3325",
    fontSize: 15,
    fontWeight: "600",
  },
  userName: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 18,
  },
  videoButton: {
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
  sideMenuButton: {
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 33,
    marginRight: 20,
  },
  formContainer: {
    backgroundColor: "white",
    height: 132,
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopWidth: 1,
    borderTopColor: "#F2F2F2",
    flexDirection: "column",
    paddingHorizontal: 13,
  },
  messageInput: {
    width: "100%",
    height: 70,
  },
  messageButtonsContainer: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plusButton: {
    width: 40,
    height: 40,
    borderRadius: 90,
    backgroundColor: "rgba(243, 238, 232, 0.93)",
    justifyContent: "center",
    alignItems: "center",
  },
  plusText: {
    fontSize: 20,
    color: "black",
  },
  sendButton: {
    width: 49,
    height: 40,
    borderRadius: 90,
    backgroundColor: "#6243E9",
    borderWidth: 2,
    borderColor: "#5B3ED9",
    elevation: 4,
  },
  sendButtonPress: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatRoomView;
