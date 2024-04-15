import { useDashboardStore } from "@/Store";
import { useEffect } from "react";

export const BoardController = () => {
  const { setBoards, setTopics, currentBoard, topics, isLoadingTopics } =
    useDashboardStore();

  useEffect(() => {
    setBoards();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!currentBoard || !currentBoard.isNew) {
      return;
    }
    setTopics();
    // eslint-disable-next-line
  }, [currentBoard]);

  return {
    currentBoard,
    topics,
    isLoadingTopics,
  };
};
