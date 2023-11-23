import React, { useRef, useMemo } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import BackIcon from "../icons/Back";
import SendIcon from "../icons/Send";
import SideMenuIcon from "../icons/SideMenu";
import VideoIcon from "../icons/Video";
import DocumentsIcon from "../icons/Documents";
import UploadIcon from "../icons/Upload";
import GalleryIcon from "../icons/Gallery";

function ChatRoomView({ navigation }: any): JSX.Element {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['50%'], []);

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
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => bottomSheetRef.current?.expand()}
          >
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>

          <View style={styles.sendButton}>
            <TouchableOpacity style={styles.sendButtonPress}>
              <SendIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        enablePanDownToClose
        snapPoints={snapPoints}
        backdropComponent={(props: BottomSheetBackdropProps) => (
          <BottomSheetBackdrop
            disappearsOnIndex={-1}
            style={styles.menuBackdrop}
            {...props}
          />
        )}
        handleComponent={() => (
          <View style={styles.menuHandle}>
            <View style={styles.menuHandleIcon} />
          </View>
        )}
      >
        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>Add</Text>
          <TouchableOpacity style={styles.menuOption}>
            <DocumentsIcon />
            <Text style={styles.menuTopOptionLabel}>Your Documents</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.menuOption}>
            <UploadIcon />
            <Text style={styles.menuTopOptionLabel}>Upload</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <GalleryIcon />
            <Text style={styles.menuTopOptionLabel}>Gallery</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
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
  menuBackdrop: {
    backgroundColor: "red"
  },
  menuHandle: {
    width: "100%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    backgroundColor: "white",
  },
  menuHandleIcon: {
    width: 56,
    height: 4,
    borderRadius: 100,
    backgroundColor: "#ECECEC",
  },
  menuContainer: {
    flexDirection: "column",
    paddingVertical: 10,
  },
  menuTitle: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 16,
  },
  menuOption: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 23,
    marginLeft: 16,
  },
  menuTopOptionLabel: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 18,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 33,
  },
});

export default ChatRoomView;
