import type { BoardType, TaskGroupBaseType, TopicType } from "@/Types";

import { create } from "zustand";

import type { ValuesType } from "@/Components/Organisms/AddTask/AddTaskController";
import { BoardService, TopicService } from "@/Services";

export interface DashboardStoreI {
  boards: BoardType[];
  setBoards: () => void;
  addBoard: (board: Omit<BoardType, "id">) => void;
  updateBoard: (board: Omit<BoardType, "id">) => void;
  deleteBoard: () => void;
  currentBoard: BoardType | null | undefined;
  setCurrentBoard: (board: BoardType) => void;
  topics: TopicType[];
  setTopics: () => void;
  addTopic: (topic: Omit<TopicType, "id">) => void;
  addTaskGroup: (taskGroup: Omit<TaskGroupBaseType, "id">) => void;
  addTask: (task: Omit<ValuesType, "id">) => void;
  clearDashboard: () => void;
}

export const useDashboardStore = create<DashboardStoreI>()((set) => ({
  boards: [],
  topics: [],
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
  async setTopics() {
    const { currentBoard } = useDashboardStore.getState();
    if (!currentBoard) return;
    const topics = await TopicService.getAllTopics(currentBoard.id);
    set(() => ({
      topics,
    }));
  },
  async addTopic(topic) {
    const newTopic: TopicType = {
      id: crypto.randomUUID(),
      name: topic.name,
    };
    set((store) => ({ topics: [...store.topics, newTopic] }));
  },
  addTaskGroup(taskGroup) {
    console.log(taskGroup);
  },
  addTask(task) {
    console.log(task);
  },
  clearDashboard() {
    set(() => ({
      boards: [],
      topics: [],
      currentBoard: null,
    }));
  },
}));
