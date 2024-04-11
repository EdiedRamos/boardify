import { useDashboardStore } from "@/Store";
import { useEffect } from "react";

export const BoardController = () => {
  const { setBoards, boards } = useDashboardStore();

  useEffect(() => {
    setBoards();
  }, [setBoards]);

  return {
    boards,
  };
};
