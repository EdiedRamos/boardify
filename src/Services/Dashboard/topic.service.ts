import { type AxiosResponse } from "axios";

import type { GetAllTopicsI, TopicType } from "@/Types";

import { baseAxios } from "@/Domain/Config";
import { TopicBodyType } from "@/Types";

export const TopicService = {
  async createTopic(body: TopicBodyType): Promise<TopicType | null> {
    try {
      const response: AxiosResponse<TopicType> = await baseAxios
        .create()
        .post<TopicType>("topics/", body);
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
      const response: AxiosResponse<GetAllTopicsI> = await baseAxios
        .create()
        .get<GetAllTopicsI>(`boards/${boardId}/topics/`);
      return response.data.content;
    } catch {
      return [];
    }
  },

  async deleteTopic(topicId: string): Promise<boolean> {
    try {
      await baseAxios.create().delete<unknown>(`topics/${topicId}/`);
      return true;
    } catch {
      return false;
    }
  },

  async updateTopic(topic: TopicType): Promise<TopicType | null> {
    try {
      const response: AxiosResponse<TopicType> = await baseAxios
        .create()
        .put<TopicType>(`/topics/${topic.id}/`, topic);
      return response.data;
    } catch {
      return null;
    }
  },
};
