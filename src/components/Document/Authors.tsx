import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export type Author = {
  name: string,
  isRemainsNumber?: boolean,
}

type Props = {
  data: Author[];
}

function Authors({ data }: Props): JSX.Element {
  const [authors, setAuthors] = React.useState<Author[]>([]);

  React.useEffect(() => {
    if (data.length > 2) {
      let aut = data.filter((d, i) => i <= 1);
      setAuthors([{ name: "+" + data.filter((d, i) => i > 1).length, isRemainsNumber: true }, ...aut]);
    } else {
      setAuthors(data);
    }

  }, [data]);

  console.log({ authors });

  return (
    <View style={styles.authorsContainer}>
      {authors.map((d, i) => {
        const names = d.name.split(" ");
        return (
          <View
            key={d.name}
            style={[
              styles.authorCircle,
              i === 0 && styles.moreCircle,
              i === 1 && styles.ownCircle,
              i === 2 && styles.diffCircle,
              {
                zIndex: i + 1,
                right: i * 26,
                bottom: -16,
              }
            ]}
          >
            <Text
              style={[
                i === 1 && styles.ownLabel,
                i === 2 && styles.diffLabel,
              ]}
            >
              {!d.isRemainsNumber ? `${names[0][0]}${names[1][0]}` : d.name}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  authorsContainer: {
    height: "100%",
    flexDirection: "row",
  },
  authorCircle: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "red",
    position: "absolute",
  },
  ownCircle: {
    backgroundColor: "#B1C3FA",
    borderWidth: 2,
    borderColor: "white",
  },
  moreCircle: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EAE6DE",
  },
  ownLabel: {
    color: "#213B8C",
  },
  diffCircle: {
    backgroundColor: "#F6C3B0",
    borderWidth: 2,
    borderColor: "white",
  },
  diffLabel: {
    color: "#AC7C6A",
  },
});

export default Authors;
