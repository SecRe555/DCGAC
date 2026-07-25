import useGlobalState from "@/state/global-state";
import { FontAwesomeFreeSolid } from "@react-native-vector-icons/fontawesome-free-solid";
import { useEffect, useState } from "react";
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
  backgroundColor: string;
  foregroundColor: string;
  rotate: "left" | "right";
}

export default function PlayerGameInfo(props: PlayerGameInfoProps) {
  const { memoryValue, setMemoryValue, resetTrigger, setResetTrigger } =
    useGlobalState();

  const [deckCards, setDeckCards] = useState(40);
  const [trashCards, setTrashCards] = useState(0);

  const [size, setSize] = useState({ width: 0, height: 0 });

  const rotation = props.rotate === "left" ? "-90deg" : "90deg";
  const customForeground = { color: props.foregroundColor };

  const isPressed = (index: number) => memoryValue === index;

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setSize({ width, height });
  };

  useEffect(() => {
    setDeckCards(40);
    setTrashCards(0);
  }, [resetTrigger]);

  return (
    <View
      {...props}
      onLayout={onLayout}
      style={[
        styles.container,
        props.style,
        { backgroundColor: props.backgroundColor || "#FFF" },
      ]}
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
                disabled={deckCards >= 50}
                onPress={() => setDeckCards(deckCards + 1)}
              >
                <FontAwesomeFreeSolid
                  name="add"
                  style={[customForeground, styles.buttonsText]}
                />
              </Pressable>
              <Text style={customForeground}>
                Deck: {deckCards < 10 && "0"}
                {deckCards}
              </Text>
              <Pressable
                style={[
                  styles.counterButtons,
                  { borderColor: props.foregroundColor },
                ]}
                disabled={deckCards <= 0}
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
              {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => {
                const trueValue = props.rotate === "left" ? -value : value;

                return (
                  <Pressable
                    key={value}
                    style={[
                      styles.memoryButtons,
                      { borderColor: props.foregroundColor },
                      isPressed(trueValue)
                        ? { backgroundColor: props.foregroundColor }
                        : { backgroundColor: props.backgroundColor },
                    ]}
                    onPress={() => setMemoryValue(trueValue)}
                  >
                    <Text
                      style={[
                        { fontSize: 24 },
                        isPressed(trueValue)
                          ? { color: props.backgroundColor }
                          : { color: props.foregroundColor },
                      ]}
                    >
                      {value}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <View style={styles.memoryRow}>
              {Array.from({ length: 5 }, (_, i) => i + 6).map((value) => {
                const trueValue = props.rotate === "left" ? -value : value;

                return (
                  <Pressable
                    key={value}
                    style={[
                      styles.memoryButtons,
                      { borderColor: props.foregroundColor },
                      isPressed(trueValue)
                        ? { backgroundColor: props.foregroundColor }
                        : { backgroundColor: props.backgroundColor },
                    ]}
                    onPress={() => setMemoryValue(trueValue)}
                  >
                    <Text
                      style={[
                        { fontSize: 24 },
                        isPressed(trueValue)
                          ? { color: props.backgroundColor }
                          : { color: props.foregroundColor },
                      ]}
                    >
                      {value}
                    </Text>
                  </Pressable>
                );
              })}
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
                disabled={trashCards >= 50}
              >
                <FontAwesomeFreeSolid
                  name="add"
                  style={[customForeground, styles.buttonsText]}
                />
              </Pressable>
              <Text style={customForeground}>
                Trash: {trashCards < 10 && "0"}
                {trashCards}
              </Text>
              <Pressable
                style={[
                  styles.counterButtons,
                  { borderColor: props.foregroundColor },
                ]}
                disabled={trashCards <= 0}
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
  },

  rotated: {
    position: "absolute",

    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 24,
    paddingHorizontal: 16,
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
    gap: 55,
    paddingBottom: 25,
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
