import type { BoardType, TopicType, TaskCreationType } from "@/Types";

import { create } from "zustand";

import { BoardService, TaskService, TopicService } from "@/Services";

export interface DashboardStoreI {
  boards: BoardType[];
  setBoards: () => void;
  addBoard: (board: Omit<BoardType, "id">) => void;
  updateBoard: (board: BoardType) => void;
  deleteBoard: () => void;
  currentBoard: BoardType | null | undefined;
  setCurrentBoard: (board: BoardType) => void;
  topics: TopicType[];
  isLoadingTopics: boolean;
  setTopics: () => void;
  addTopic: (topic: Omit<TopicType, "id">) => void;
  addTask: (task: TaskCreationType) => void;
  clearDashboard: () => void;
}

export const useDashboardStore = create<DashboardStoreI>()((set) => ({
  boards: [],
  topics: [],
  isLoadingTopics: false,
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
        topics: [],
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
  async updateBoard(board) {
    const updated = await BoardService.updateBoard(board);
    set((store) => ({
      boards: store.boards.map((board) =>
        board.id === updated.id ? updated : board
      ),
    }));
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
    set(() => ({
      isLoadingTopics: true,
    }));
    const topics = await TopicService.getAllTopics(currentBoard.id);
    set(() => ({
      topics,
      isLoadingTopics: false,
    }));
  },
  async addTopic(topic) {
    const { currentBoard } = useDashboardStore.getState();
    if (!currentBoard) return;
    const newTopic = await TopicService.createTopic({
      ...topic,
      boardId: currentBoard.id,
    });
    if (newTopic === null) return;
    set((store) => ({ topics: [...store.topics, newTopic] }));
  },
  addTask(task) {
    TaskService.createTask(task);
  },
  clearDashboard() {
    set(() => ({
      boards: [],
      topics: [],
      currentBoard: null,
    }));
  },
}));
