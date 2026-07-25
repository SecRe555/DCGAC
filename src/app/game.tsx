import PlayerGameInfo from "@/components/player-game-info";
import useGlobalState from "@/state/global-state";
import PressedStyle from "@/types/pressed-style";
import FontAwesomeFreeSolid from "@react-native-vector-icons/fontawesome-free-solid";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GameScreen() {
  const {
    player1,
    player2,
    memoryValue,
    setMemoryValue,
    resetTrigger,
    setResetTrigger,
  } = useGlobalState();

  const zeroPressed = memoryValue === 0;

  const pressedStyle: PressedStyle = zeroPressed
    ? { bg: { backgroundColor: "#000" }, text: { color: "#FFF" } }
    : { bg: { backgroundColor: "#FFF" }, text: { color: "#000" } };

  const resetGameParams = () => {
    setMemoryValue(0);
    setResetTrigger(!resetTrigger);
  };

  return (
    <>
      <PlayerGameInfo
        style={[styles.playerInfo]}
        playerName={player1}
        backgroundColor="#FFF"
        foregroundColor="#000"
        rotate="right"
      />
      <PlayerGameInfo
        style={[styles.playerInfo]}
        playerName={player2}
        backgroundColor="#000"
        foregroundColor="#FFF"
        rotate="left"
      />
      <View style={styles.centerButtonContainer}>
        <Pressable
          style={[styles.centerButton, pressedStyle.bg]}
          onPress={() => setMemoryValue(0)}
        >
          <Text style={[styles.centerButtonText, pressedStyle.text]}>0</Text>
        </Pressable>
      </View>
      <Pressable style={styles.resetButton} onPress={resetGameParams}>
        <FontAwesomeFreeSolid name="refresh" style={styles.resetButtonText} />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  playerInfo: {
    flex: 1,
  },

  centerButtonContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }, { rotate: "90deg" }],
    zIndex: 100,
  },

  centerButton: {
    width: 52,
    height: 52,
    borderRadius: "50%",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },

  centerButtonText: {
    fontSize: 24,
    color: "#000",
  },

  resetButton: {
    position: "absolute",
    top: 16,
    left: 16,

    width: 48,
    height: 48,
    borderRadius: 24,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FFF",
    borderWidth: 1,

    zIndex: 100,
  },

  resetButtonText: {
    fontSize: 16,
    color: "#000",
  },
});
