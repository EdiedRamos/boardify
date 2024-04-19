import { type AxiosResponse } from "axios";

import type { TaskItemType } from "@/Types";

import { baseAxios } from "@/Domain/Config";

type TaskUpdateBodyType = Partial<TaskItemType> & { id: string };

export const taskItemService = {
  async updateTaskItem(body: TaskUpdateBodyType): Promise<TaskItemType | null> {
    try {
      const response: AxiosResponse<TaskItemType> = await baseAxios
        .create()
        .patch<TaskItemType>(`task-items/${body.id}/`, body);
      if (!response) return null;
      return response.data;
    } catch {
      return null;
    }
  },
};
