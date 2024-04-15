import { type AxiosResponse } from "axios";

import type {
  GetAllTasksI,
  TaskCreationType,
  TaskPreviewType,
  TaskType,
} from "@/Types";

import { baseAxios } from "@/Domain/Config";

export const TaskService = {
  async createTask(body: TaskCreationType): Promise<TaskType | null> {
    try {
      const response: AxiosResponse<TaskType> = await baseAxios
        .create()
        .post<TaskType>("task/", body);
      if (response.status === 201) {
        return response.data;
      }
      return null;
    } catch {
      return null;
    }
  },

  async getAllTasks(topicId: string): Promise<Array<TaskPreviewType>> {
    try {
      const response: AxiosResponse<GetAllTasksI> = await baseAxios
        .create()
        .get<GetAllTasksI>(`topic/${topicId}/tasks/`);
      return response.data.content;
    } catch {
      return [];
    }
  },

  async deleteTopic(boardId: string): Promise<boolean> {
    try {
      const response: AxiosResponse<unknown> = await baseAxios
        .create()
        .delete<unknown>(`boards/${boardId}/`);
      console.log({ response });
      return true;
    } catch {
      return false;
    }
  },
};
