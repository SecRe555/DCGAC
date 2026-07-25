import PlayerGameInfo from "@/components/player-game-info";
import useGlobalState from "@/state/global-state";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GameScreen() {
  const { player1, player2 } = useGlobalState();

  return (
    <>
      <PlayerGameInfo
        style={[styles.playerInfo]}
        playerName={player1}
        rotate="right"
      />
      <PlayerGameInfo
        style={[styles.playerInfo, { backgroundColor: "#000" }]}
        playerName={player2}
        foregroundColor="#FFF"
        rotate="left"
      />
      <View style={styles.centerButtonContainer}>
        <Pressable style={styles.centerButton}>
          <Text style={styles.centerButtonText}>0</Text>
        </Pressable>
      </View>
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
    transform: [{ translateX: -30 }, { translateY: -25 }, { rotate: "90deg" }],
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
});
