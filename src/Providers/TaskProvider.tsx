import { TaskContext } from "@/Context";
import type { TaskType } from "@/Types";
import { useState } from "react";

type PropsType = {
  children: React.ReactNode;
};

export const TaskProvider = ({ children }: PropsType) => {
  const [tasks, setTasks] = useState<Array<TaskType>>([]);

  const handleLocalUpdate = (task: TaskType) => {
    setTasks((tasks) =>
      tasks.map((oldTask) => (oldTask.id === task.id ? task : oldTask))
    );
  };

  const values = {
    tasks,
    setTasks,
    onUpdate: handleLocalUpdate,
  };

  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};
