import { create } from "zustand";

type GameState = {
  category: null | string;
  health: number;
  wordList: string[];
};

export const useGame = create<GameState>((set) => ({
  category: null,
  health: 8,
  wordList: [],
}));
