import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewProps,
} from "react-native";

interface PlayerInfoProps extends ViewProps {
  player: number;
  textStyle?: StyleProp<TextStyle>;
  playerName: string;
  setPlayerName: (player: string) => void;
  playerNameStyle?: StyleProp<TextStyle>;
}

export default function PlayerData(props: PlayerInfoProps) {
  return (
    <View {...props} style={[styles.container, props.style]}>
      <Text style={[styles.text, props.textStyle]}>Jugador {props.player}</Text>
      <TextInput
        value={props.playerName}
        onChangeText={props.setPlayerName}
        style={[styles.input, props.playerNameStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  text: {
    fontSize: 32,
  },

  input: {
    width: "80%",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
  },
});
