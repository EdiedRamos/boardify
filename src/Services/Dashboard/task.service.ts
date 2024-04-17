import { type AxiosResponse } from "axios";

import type {
  GetAllTasksI,
  TaskCreationRequestType,
  TaskCreationType,
  TaskType,
} from "@/Types";

import { baseAxios } from "@/Domain/Config";

export const TaskService = {
  async createTask(body: TaskCreationType): Promise<TaskType | null> {
    try {
      const task: TaskCreationRequestType = {
        ...body,
        taskItems: body.taskItems.map((item) => item.content),
      };
      const response: AxiosResponse<TaskType> = await baseAxios
        .create()
        .post<TaskType>("task/", task);
      if (!response) return null;
      return response.data;
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

  async getById(taskId: string): Promise<TaskType | null> {
    try {
      const response: AxiosResponse<TaskType> = await baseAxios
        .create()
        .get(`task/${taskId}/`);
      return response.data;
    } catch {
      return null;
    }
  },

  async updateTask(
    taskId: string,
    body: TaskCreationType
  ): Promise<TaskType | null> {
    try {
      const response: AxiosResponse<TaskType> = await baseAxios
        .create()
        .put(`task/${taskId}/`, body);
      if (!response) return null;
      return response.data;
    } catch {
      return null;
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
