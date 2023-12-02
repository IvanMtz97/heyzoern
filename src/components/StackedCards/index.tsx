import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import PaymentsIcon from "../../icons/Payments";

const cards = [{
  icon: <PaymentsIcon />,
  text: "$200 Credit",
  buttonText: "Claim",
}, {
  icon: <PaymentsIcon />,
  text: "$200 Credit",
  buttonText: "Claim",
}, {
  icon: <PaymentsIcon />,
  text: "$200 Credit",
  buttonText: "Claim",
}];

const widths = ["100%", "95%", "90%"];
const backgroundColors = ["#36237D", "#4C33A9", "#6140DD"];
const indexes = [2, 1, 0];
const tops = [0, 15, 30];

function Card(props: any) {
  return (
    <TouchableOpacity style={[styles.cardContainer, props.style]}>
      {props.index === 0 && (
        <>
        <View style={styles.textsContainer}>
          {props.icon}
          <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.buttonText}</Text>
        </View>
        </>
      )}
    </TouchableOpacity>
  )
}

function StackedCards(props: any) {
  return (
    <View style={[styles.container, props.style]}>
      {cards.map((c, i) => (
        <Card
          index={i}
          key={i}
          style={{
            width: widths[i],
            backgroundColor: backgroundColors[i],
            zIndex: indexes[i],
            top: tops[i],
          }}
          icon={c.icon}
          text={c.text}
          buttonText={c.buttonText}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    alignItems: "center",
  },
  cardContainer: {
    height: 52,
    borderRadius: 15,
    flexDirection: "row",
    paddingHorizontal: 14,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
  },
  textsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    marginLeft: 16,
    fontSize: 12,
    fontWeight: "600",
  },
  button: {
    width: 70,
    height: 27,
    backgroundColor: "#46338C",
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#F1EBFF",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default StackedCards;
