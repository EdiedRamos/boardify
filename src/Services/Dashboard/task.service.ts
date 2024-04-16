import { type AxiosResponse } from "axios";

import type { GetAllTasksI, TaskCreationType, TaskType } from "@/Types";

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

  async getAllTasks(topicId: string): Promise<Array<TaskType>> {
    try {
      const response: AxiosResponse<GetAllTasksI> = await baseAxios
        .create()
        .get<GetAllTasksI>(`topic/${topicId}/tasks/`);
      return response.data.content;
    } catch {
      return [];
    }
  },

  async deleteTask(taskId: string): Promise<boolean> {
    try {
      await baseAxios.create().delete<unknown>(`task/${taskId}/`);
      return true;
    } catch {
      return false;
    }
  },
};
