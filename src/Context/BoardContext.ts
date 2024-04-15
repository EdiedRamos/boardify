import { createContext } from "react";

type BoardContextType = {
  currentTopic: string;
  handleTopic: (topidId: string) => void;
};

export const BoardContext = createContext<BoardContextType | undefined>(
  undefined
);
