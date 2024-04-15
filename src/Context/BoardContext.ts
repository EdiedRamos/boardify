import { createContext } from "react";

import type { TaskType } from "@/Types";

type BoardContextType = {
  currentTopic: string;
  handleTopic: (topidId: string) => void;
  newTask: TaskType | null;
  taskEmitter: (task: TaskType) => void;
  taskReceiver: () => void;
};

export const BoardContext = createContext<BoardContextType | undefined>(
  undefined
);
