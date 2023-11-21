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
  onPress: () => void;
}

function Accordion({ title, isExpanded, children, onPress }: AccordionProps): JSX.Element {
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
    <View style={styles.accordionContainer}>
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
    paddingHorizontal: 40,
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
