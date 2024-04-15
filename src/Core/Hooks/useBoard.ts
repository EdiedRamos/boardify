import { BoardContext } from "@/Context";
import { useContext } from "react";

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (!context) {
    return;
  }
  return context;
};
