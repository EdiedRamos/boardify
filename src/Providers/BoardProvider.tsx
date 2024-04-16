import { useState } from "react";

import { BoardContext } from "@/Context";
import { TaskType, TopicType } from "@/Types";

type PropsType = {
  children: React.ReactNode;
};

export const BoardProvider = ({ children }: PropsType) => {
  const [currentTopic, setCurrentTopic] = useState<TopicType | null>(null);
  const [newTask, setNewTask] = useState<TaskType | null>(null);

  const handleTopic = (topic: TopicType) => {
    setCurrentTopic(topic);
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
