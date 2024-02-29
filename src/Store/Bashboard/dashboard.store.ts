import { create } from "zustand";

import type {
  DashboardType,
  BoardType,
  BoardBaseType,
  TaskGroupBaseType,
  TaskGroupType,
  TaskType,
  SubtaskType,
} from "@/Types";
import type { ValuesType } from "@/Components/Organisms/AddTask/AddTaskController";

export interface IDashboardState {
  // * Properties
  boards: DashboardType;
  currentBoard: number | null | undefined;
  // * Methods
  setBoards: (boards: DashboardType) => void;
  setCurrentBoard: (boardId: number) => void;
  addBoard: (board: Omit<BoardBaseType, "id">) => void;
  updateBoard: (board: Omit<BoardBaseType, "id">) => void;
  deleteBoard: () => void;
  addTaskGroup: (taskGroup: Omit<TaskGroupBaseType, "id">) => void;
  addTask: (task: ValuesType) => void;
}

export const useDashboardStore = create<IDashboardState>()((set) => ({
  // * Properties
  boards: { boardList: [] },
  currentBoard: null,
  // * Methods
  setBoards(boards: DashboardType) {
    set(() => ({ boards: boards }));
  },
  setCurrentBoard(boardId) {
    set(() => ({
      currentBoard: boardId,
    }));
  },
  addBoard(board) {
    const newBoard: BoardType = {
      id: 12,
      name: board.name,
      taskGroupList: [],
    };
    set((store) => ({
      boards: {
        boardList: [...store.boards.boardList, newBoard],
      },
      currentBoard: 12,
    }));
  },
  updateBoard(board) {
    set((store) => {
      return {
        boards: {
          boardList: store.boards.boardList.map((currentBoard) => {
            if (currentBoard.id === store.currentBoard) {
              return {
                ...currentBoard,
                ...board,
              };
            }
            return currentBoard;
          }),
        },
      };
    });
  },
  deleteBoard() {
    set((store) => ({
      boards: {
        boardList: store.boards.boardList.filter(
          (board) => board.id !== store.currentBoard
        ),
      },
    }));
    set((store) => ({
      currentBoard: store.boards.boardList[0]?.id,
    }));
  },
  addTaskGroup(taskGroup) {
    const newTaskGroup: TaskGroupType = {
      id: 12,
      status: taskGroup.status,
      taskList: [],
    };
    set((store) => {
      return {
        boards: {
          boardList: store.boards.boardList.map((board) =>
            board.id === store.currentBoard
              ? {
                  ...board,
                  taskGroupList: [...board.taskGroupList, newTaskGroup],
                }
              : board
          ),
        },
      };
    });
  },
  addTask(task) {
    set((store) => {
      const newTask: TaskType = {
        id: 123,
        title: task.title,
        description: task.description,
        status: { id: +task.status, status: "something" },
        subtaskList: task.subtaskList.map((subtask): SubtaskType => {
          return {
            id: 1,
            state: false,
            title: subtask.title,
          };
        }),
      };

      return {
        boards: {
          boardList: store.boards.boardList.map((board) =>
            board.id === store.currentBoard
              ? {
                  ...board,
                  taskGroupList: board.taskGroupList.map((group) =>
                    group.id === newTask.status.id
                      ? { ...group, taskList: [...group.taskList, newTask] }
                      : group
                  ),
                }
              : board
          ),
        },
      };
    });
  },
}));
