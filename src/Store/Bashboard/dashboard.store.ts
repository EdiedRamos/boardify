import type { BoardType, TaskGroupBaseType } from "@/Types";

import { create } from "zustand";

import type { ValuesType } from "@/Components/Organisms/AddTask/AddTaskController";
import { BoardService } from "@/Services";

export interface DashboardStoreI {
  boards: BoardType[];
  currentBoard: BoardType | null | undefined;
  setBoards: () => void;
  setCurrentBoard: (board: BoardType) => void;
  addBoard: (board: Omit<BoardType, "id">) => void;
  updateBoard: (board: Omit<BoardType, "id">) => void;
  deleteBoard: () => void;
  addTaskGroup: (taskGroup: Omit<TaskGroupBaseType, "id">) => void;
  addTask: (task: ValuesType) => void;
}

export const useDashboardStore = create<DashboardStoreI>()((set) => ({
  boards: [],
  currentBoard: null,
  async setBoards() {
    const boards = await BoardService.getAllBoards();
    set(() => ({
      boards: boards,
      currentBoard: boards[0],
    }));
  },
  setCurrentBoard(board) {
    set(() => {
      return {
        currentBoard: board,
      };
    });
  },
  async addBoard(board) {
    const newBoard = await BoardService.createBoard(board);
    if (newBoard === null) return;
    set((store) => ({
      boards: [...store.boards, newBoard],
      currentBoard: newBoard,
    }));
  },
  updateBoard(board) {
    console.log(board);
  },
  async deleteBoard() {
    const { currentBoard, boards } = useDashboardStore.getState();
    if (!currentBoard) return;
    const status = await BoardService.deleteBoard(currentBoard.id);
    if (!status) return;
    const newBoardsList = boards.filter(
      (board) => board.id !== currentBoard.id
    );
    const newCurrentBoard = newBoardsList[0];
    set(() => ({
      boards: newBoardsList,
      currentBoard: newCurrentBoard,
    }));
  },
  addTaskGroup(taskGroup) {
    console.log(taskGroup);
  },
  addTask(task) {
    console.log(task);
  },
}));
