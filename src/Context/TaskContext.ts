import { TaskType } from "@/Types";
import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

type TasksType = Array<TaskType>;

interface TaskContextI {
  tasks: TasksType;
  setTasks: Dispatch<SetStateAction<TasksType>>;
  onUpdate: (task: TaskType) => void;
}

export const TaskContext = createContext<TaskContextI | undefined>(undefined);
