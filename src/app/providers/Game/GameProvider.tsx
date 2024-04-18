"use client";

import React, { ReactNode } from "react";
import { useGame } from "./useGame";
import GameContext from "./GameContext";

const GameProvider = ({ children }: { children: ReactNode }) => {
  const game = useGame();

  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
};

export default GameProvider;
