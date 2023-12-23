import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  Platform,
  LayoutAnimation,
} from "react-native";
import ArrowDown from "../../icons/ArrowDown";
import ArrowUp from "../../icons/ArrowUp";

type AccordionProps = {
  title: string;
  isExpanded: boolean;
  children: JSX.Element;
  noPadding?: boolean;
  onPress: () => void;
}

function Accordion({ title, isExpanded, children, onPress, noPadding }: AccordionProps): JSX.Element {
  useEffect(() => {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  useEffect(() => {
    if (isExpanded) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
  }, [isExpanded]);

  return (
    <View style={[styles.accordionContainer, { paddingHorizontal: noPadding? 0 : 40 }]}>
      <TouchableOpacity style={styles.collapseContainer} onPress={onPress}>
        <Text style={styles.accordionTitle}>{title}</Text>
        {isExpanded ? <ArrowUp /> : <ArrowDown />}
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.childrenContainer}>
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  accordionContainer: {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
  },
  accordionTitle: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  collapseContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
  },
  childrenContainer: {
    paddingBottom: 30,
  },
});

export default Accordion;
