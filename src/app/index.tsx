import PlayerData from "@/components/player-data";
import useGlobalState from "@/state/global-state";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  const { player1, setPlayer1, player2, setPlayer2 } = useGlobalState();

  return (
    <>
      <View style={styles.appbar}>
        <Text style={styles.appbarTitle}>DCGAC</Text>
      </View>
      <View style={styles.container}>
        <PlayerData
          player={1}
          style={styles.playerInfo}
          playerName={player1}
          setPlayerName={setPlayer1}
        />
        <PlayerData
          player={2}
          style={[styles.playerInfo, { backgroundColor: "#000" }]}
          textStyle={{ color: "#FFF" }}
          playerName={player2}
          setPlayerName={setPlayer2}
          playerNameStyle={{ color: "#FFF", borderColor: "#FFF" }}
        />
        <Pressable style={styles.button} onPress={() => router.push("/game")}>
          <Text style={styles.buttonText}>Iniciar partida</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appbar: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: "#000",
  },

  appbarTitle: {
    flex: 1,
    fontSize: 24,
    color: "#FFF",
  },

  container: {
    flex: 1,
    paddingBottom: 24,
  },

  playerInfo: {
    flex: 5,
  },

  button: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 24,
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: "#000",
  },

  buttonText: {
    fontSize: 24,
    color: "#FFF",
  },
});
