"use client";

import { createContext, useContext } from "react";
import { useGame } from "./useGame";

type GameContextType = ReturnType<typeof useGame>;

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};

export default GameContext;
