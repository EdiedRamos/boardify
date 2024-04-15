import { ResponseI } from "../Response/response.types";

export type TaskPreviewType = {
  id: string;
  name: string;
  description: string;
  subtitle?: string;
};

export type TaskItemType = {
  id: string;
  name: string;
  isDone: boolean;
};

export type TaskItemCreateType = Array<string>;

export type TaskType = {
  id: string;
  name: string;
  description: string;
  topicId: string;
  taskItems: TaskItemCreateType | Array<TaskItemType>;
};

export type TaskCreationType = Omit<TaskType, "id">;

// * Response type
export interface GetAllTasksI extends ResponseI {
  content: TaskPreviewType[];
}
