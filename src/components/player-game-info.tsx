import { FontAwesomeFreeSolid } from "@react-native-vector-icons/fontawesome-free-solid";
import { useState } from "react";
import {
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";

interface PlayerGameInfoProps extends ViewProps {
  playerName: string;
  foregroundColor?: string;
  rotate: "left" | "right";
}

export default function PlayerGameInfo(props: PlayerGameInfoProps) {
  const [deckCards, setDeckCards] = useState(40);
  const [trashCards, setTrashCards] = useState(0);

  const [size, setSize] = useState({ width: 0, height: 0 });

  const rotation = props.rotate === "left" ? "-90deg" : "90deg";
  const customForeground = { color: props.foregroundColor };

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setSize({ width, height });
  };

  return (
    <View
      {...props}
      onLayout={onLayout}
      style={[styles.container, props.style]}
    >
      {size.width > 0 && (
        <View
          style={[
            styles.rotated,
            {
              width: size.height,
              height: size.width,

              left: (size.width - size.height) / 2,
              top: (size.height - size.width) / 2,

              transform: [{ rotate: rotation }],
            },
          ]}
        >
          {/* Top Half */}
          <View style={styles.topHalf}>
            <Text style={customForeground}>{props.playerName}</Text>
            <View style={styles.cardCounter}>
              <Pressable
                style={[
                  styles.counterButtons,
                  { borderColor: props.foregroundColor },
                ]}
                onPress={() => setDeckCards(deckCards + 1)}
              >
                <FontAwesomeFreeSolid
                  name="add"
                  style={[customForeground, styles.buttonsText]}
                />
              </Pressable>
              <Text style={customForeground}>Deck: {deckCards}</Text>
              <Pressable
                style={[
                  styles.counterButtons,
                  { borderColor: props.foregroundColor },
                ]}
                onPress={() => setDeckCards(deckCards - 1)}
              >
                <FontAwesomeFreeSolid
                  name="minus"
                  style={[customForeground, styles.buttonsText]}
                />
              </Pressable>
            </View>
          </View>
          {/* Memory counter */}
          <View style={styles.memoryCounter}>
            <View style={styles.memoryRow}>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
                <Pressable
                  key={value}
                  style={[
                    styles.memoryButtons,
                    { borderColor: props.foregroundColor },
                  ]}
                >
                  <Text style={{ color: props.foregroundColor, fontSize: 24 }}>
                    {value}
                  </Text>
                </Pressable>
              ))}
            </View>

            <View style={styles.memoryRow}>
              {Array.from({ length: 5 }, (_, i) => i + 6).map((value) => (
                <Pressable
                  key={value}
                  style={[
                    styles.memoryButtons,
                    { borderColor: props.foregroundColor },
                  ]}
                >
                  <Text style={{ color: props.foregroundColor, fontSize: 24 }}>
                    {value}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
          {/* Bottom Half */}
          <View style={styles.bottomHalf}>
            <View style={styles.cardCounter}>
              <Pressable
                style={[
                  styles.counterButtons,
                  { borderColor: props.foregroundColor },
                ]}
                onPress={() => setTrashCards(trashCards + 1)}
              >
                <FontAwesomeFreeSolid
                  name="add"
                  style={[customForeground, styles.buttonsText]}
                />
              </Pressable>
              <Text style={customForeground}>Trash: {trashCards}</Text>
              <Pressable
                style={[
                  styles.counterButtons,
                  { borderColor: props.foregroundColor },
                ]}
                onPress={() => setTrashCards(trashCards - 1)}
              >
                <FontAwesomeFreeSolid
                  name="minus"
                  style={[customForeground, styles.buttonsText]}
                />
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "red",
  },

  rotated: {
    position: "absolute",

    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 24,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "blue",
  },

  topHalf: {
    alignItems: "center",
  },
  bottomHalf: {},

  cardCounter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },

  counterButtons: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: "50%",
  },

  buttonsText: {
    fontSize: 14,
  },

  memoryCounter: {
    gap: 12,
    paddingBottom: 15,
  },

  memoryRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    gap: 16,
  },

  memoryButtons: {
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: "50%",
    padding: 5,
  },
});
