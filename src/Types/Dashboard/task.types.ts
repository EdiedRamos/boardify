import { ResponseI } from "../Response/response.types";

export type TaskPreviewType = {
  id: string;
  name: string;
  description: string;
  subtitle?: string;
};

export type TaskItemType = {
  id: string;
  content: string;
  isDone: boolean;
};

export type TaskType = {
  id: string;
  name: string;
  description: string;
  topicId: string;
  taskItems: Array<TaskItemType>;
};

export type TaskCreationType = Omit<TaskType, "id">;

export type TaskCreationRequestType = Omit<TaskType, "id" | "taskItems"> & {
  taskItems: Array<string>;
};

// * Response type
export interface GetAllTasksI extends ResponseI {
  content: TaskType[];
}
