import { useDashboardStore } from "@/Store";
import { useEffect } from "react";

export const BoardController = () => {
  const { setBoards, currentBoard, topics } = useDashboardStore();

  useEffect(() => {
    setBoards();
  }, [setBoards]);

  useEffect(() => {}, [currentBoard]);

  return {
    currentBoard,
    topics,
  };
};
