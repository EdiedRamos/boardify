import { useState } from "react";

import { BoardContext } from "@/Context";
import { TaskType } from "@/Types";

type PropsType = {
  children: React.ReactNode;
};

export const BoardProvider = ({ children }: PropsType) => {
  const [currentTopic, setCurrentTopic] = useState<string>("");
  const [newTask, setNewTask] = useState<TaskType | null>(null);

  const handleTopic = (topicId: string) => {
    setCurrentTopic(topicId);
  };

  const taskEmitter = (task: TaskType) => {
    setNewTask(task);
  };

  const taskReceiver = () => {
    setNewTask(null);
  };

  return (
    <BoardContext.Provider
      value={{ currentTopic, handleTopic, newTask, taskEmitter, taskReceiver }}
    >
      {children}
    </BoardContext.Provider>
  );
};
