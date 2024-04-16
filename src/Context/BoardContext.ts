import { createContext } from "react";

import type { TaskType, TopicType } from "@/Types";

type BoardContextType = {
  currentTopic: TopicType | null;
  handleTopic: (topic: TopicType) => void;
  newTask: TaskType | null;
  taskEmitter: (task: TaskType) => void;
  taskReceiver: () => void;
};

export const BoardContext = createContext<BoardContextType | undefined>(
  undefined
);
