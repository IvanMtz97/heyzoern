import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import DocumentIcon from "../../icons/Document";
import EllipsisIcon from "../../icons/Ellipsis";
import Authors, { Author } from "./Authors";

type Props = {
  name: string,
  authors?:  Author[],
}

function Document({ name, authors }: Props): JSX.Element {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.iconContainer}>
          <DocumentIcon />
        </View>
        <Text style={styles.documentName}>{name}</Text>
      </View>
      <View style={styles.rightContainer}>
        {authors?.length ? <Authors data={authors} /> : null}
        <View style={styles.moreButtonContainer}>
          <TouchableOpacity style={styles.moreButton}>
            <EllipsisIcon />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 58,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EAE6DE",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 27,
    height: 27,
    borderRadius: 6,
    backgroundColor: "#F3F0FF",
  },
  documentName: {
    color: "black",
    fontWeight: "500",
    fontSize: 11,
    marginLeft: 11,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  moreButtonContainer: {
    width: 22,
    height: 22,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#DDDEDF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 7,
    elevation: 3,
    backgroundColor: "white",
  },
  moreButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Document;
