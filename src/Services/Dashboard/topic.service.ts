import { type AxiosResponse } from "axios";

import type { BoardType, GetAllTopicsI, TopicType } from "@/Types";

import { baseAxios } from "@/Domain/Config";

export const TopicService = {
  async createTopic(board: Omit<BoardType, "id">): Promise<BoardType | null> {
    try {
      const response: AxiosResponse<BoardType> =
        await baseAxios.post<BoardType>("boards/", board);
      if (response.status === 201) {
        return response.data;
      }
      return null;
    } catch {
      return null;
    }
  },

  async getAllTopics(boardId: string): Promise<Array<TopicType>> {
    try {
      const response: AxiosResponse<GetAllTopicsI> =
        await baseAxios.get<GetAllTopicsI>(`boards/${boardId}/topics/`);
      return response.data.content;
    } catch {
      return [];
    }
  },

  async deleteTopic(boardId: string): Promise<boolean> {
    try {
      const response: AxiosResponse<unknown> = await baseAxios.delete<unknown>(
        `boards/${boardId}/`
      );
      console.log({ response });
      return true;
    } catch {
      return false;
    }
  },
};
