import { create } from "zustand";

interface GlobalState {
  player1: string;
  setPlayer1: (player: string) => void;
  player2: string;
  setPlayer2: (player: string) => void;
}

const useGlobalState = create<GlobalState>((set) => ({
  player1: "Jugador 1",
  setPlayer1: (player) => set({ player1: player }),
  player2: "Jugador 2",
  setPlayer2: (player) => set({ player2: player }),
}));

export default useGlobalState;
