import type { BoardType, TopicType } from "@/Types";

import { create } from "zustand";

import { BoardService, TopicService } from "@/Services";

type BoardState = BoardType & {
  isNew: boolean;
};

export interface DashboardStoreI {
  boards: BoardType[];
  setBoards: () => void;
  addBoard: (board: Omit<BoardType, "id">) => void;
  updateBoard: (board: BoardType) => void;
  deleteBoard: () => void;
  currentBoard: BoardState | null | undefined;
  setCurrentBoard: (board: BoardType) => void;
  topics: TopicType[];
  isLoadingTopics: boolean;
  setTopics: () => void;
  addTopic: (topic: Omit<TopicType, "id">) => void;
  updateTopic: (topic: TopicType) => void;
  deleteTopic: (topicId: string) => void;
  clearDashboard: () => void;
}

export const useDashboardStore = create<DashboardStoreI>()((set) => ({
  boards: [],
  topics: [],
  isLoadingTopics: false,
  currentBoard: null,

  async setBoards() {
    const boards = await BoardService.getAllBoards();
    if (boards.length === 0) return;
    set(() => ({
      boards: boards,
      currentBoard: { ...boards[0], isNew: true },
    }));
  },

  setCurrentBoard(board) {
    set((store) => {
      // * Its the same board
      if (!store.currentBoard || store.currentBoard.id === board.id)
        return store;
      return {
        currentBoard: { ...board, isNew: true },
        topics: [],
      };
    });
  },

  async addBoard(board) {
    const newBoard = await BoardService.createBoard(board);
    if (newBoard === null) return;
    set((store) => ({
      boards: [...store.boards, newBoard],
      currentBoard: { ...newBoard, isNew: true },
    }));
  },

  async updateBoard(board) {
    const updated = await BoardService.updateBoard(board);
    set((store) => ({
      boards: store.boards.map((board) =>
        board.id === updated.id ? updated : board
      ),
      currentBoard: { ...updated, isNew: false },
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
      currentBoard:
        newBoardsList.length > 0 ? { ...newCurrentBoard, isNew: true } : null,
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
  async updateTopic(topic) {
    const updated = await TopicService.updateTopic(topic);
    if (!updated) return;
    set((store) => ({
      topics: store.topics.map((topic) =>
        topic.id === updated.id ? updated : topic
      ),
    }));
  },

  async deleteTopic(topicId) {
    const response = await TopicService.deleteTopic(topicId);
    // * Not deleted
    if (!response) {
      return;
    }

    set((store) => ({
      topics: store.topics.filter((topic) => topic.id !== topicId),
    }));
  },

  clearDashboard() {
    set(() => ({
      boards: [],
      topics: [],
      currentBoard: null,
    }));
  },
}));
