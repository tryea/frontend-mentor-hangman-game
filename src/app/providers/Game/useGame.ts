import { create } from "zustand";

import allGames from "@/data/data.json";

export type Categories =
  | "Movies"
  | "TV Shows"
  | "Countries"
  | "Capital Cities"
  | "Animals"
  | "Sports";

export type GameState = {
  category: null | Categories;
  setCategory: (category: Categories | null) => void;
  health: number;
  wordList: string[];
  currentWord: string | null;
  decreaseHealth: () => void;
  nextGame: () => void;
  openModal: () => void;
  closeModal: () => void;
  showMenuModal: boolean;
  statusGame: "Paused" | "Win" | "Lose" | "Played";
  changeStatusGame: (statusGame: "Paused" | "Win" | "Lose" | "Played") => void;
  selectedCharacter: string[];
  setSelectedCharacter: (char: string) => void;
};

export const useGame = create<GameState>((set) => ({
  category: null,
  setCategory: (category: null | Categories) =>
    set(() => {
      const newState: {
        category: null | Categories;
        wordList: string[];
        health: number;
        currentWord: string | null;
        selectedCharacter: string[];
      } = {
        category: category,
        wordList: [],
        health: 8,
        currentWord: null,
        selectedCharacter: [],
      };

      if (category !== null) {
        const wordList = allGames.categories[category].map((val) => val.name);
        newState.wordList = wordList;

        const randomIndex = Math.floor(Math.random() * wordList.length);

        newState.currentWord = wordList[randomIndex];

        newState.wordList = wordList.filter((val) => {
          return val !== wordList[randomIndex];
        });
      }

      return newState;
    }),

  health: 8,

  decreaseHealth: () => {
    set((state) => {
      const lose = state.health - 1 === 0;
      const newState = {
        health: state.health - 1,
        showMenuModal: !!lose,
        statusGame: lose ? "Lose" : state.statusGame,
      };
      return newState;
    });
  },

  nextGame: () => {
    set((state) => {
      const randomIndex = Math.floor(Math.random() * state.wordList.length);
      const word = state.wordList[randomIndex];

      return {
        currentWord: state.wordList[randomIndex],
        health: 8,
        wordList: state.wordList.filter((val) => {
          return val !== word;
        }),
        selectedCharacter: [],
      };
    });
  },
  wordList: [],
  currentWord: null,
  showMenuModal: false,
  openModal: () => {
    set((state) => ({ showMenuModal: true }));
  },

  closeModal: () => {
    set((state) => ({ showMenuModal: false }));
  },

  statusGame: "Played",
  changeStatusGame: (statusGame: GameState["statusGame"]) => {
    set(() => ({ statusGame }));
  },

  selectedCharacter: [],
  setSelectedCharacter: (char) => {
    set((state) => {
      return {
        selectedCharacter: [...state.selectedCharacter, char],
      };
    });
  },
}));
