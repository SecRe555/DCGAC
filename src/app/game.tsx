import PlayerGameInfo from "@/components/player-game-info";
import useGlobalState from "@/state/global-state";
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

export default function GameScreen() {
  const { player1, player2 } = useGlobalState();

  const { width, height } = useWindowDimensions();

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
      <View style={[styles.memoryCounter, { height: height }]}>
        <Pressable style={styles.memoryButtons}>
          <Text>10</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>9</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>8</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>7</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>6</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>5</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>4</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>3</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>2</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>1</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>0</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>1</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>2</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>3</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>4</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>5</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>6</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>7</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>8</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>9</Text>
        </Pressable>
        <Pressable style={styles.memoryButtons}>
          <Text>10</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  playerInfo: {
    flex: 1,
  },

  memoryCounter: {
    position: "absolute",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  memoryButtons: {
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: "50%",
    padding: 5,
  },
});
