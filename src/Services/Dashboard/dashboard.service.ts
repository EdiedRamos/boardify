import type { BoardBaseType } from "@/Types";

import axios, { type AxiosResponse } from "axios";

import { API_BASE_URL } from "@/Domain/Constants";
import { EntryLocalStorage } from "../LocalStorage";

export const DashboardService = {
  async createBoard(board: Omit<BoardBaseType, "id">): Promise<boolean> {
    try {
      const response: AxiosResponse<unknown> = await axios.post<unknown>(
        API_BASE_URL.concat("/boards/"),
        board,
        {
          headers: {
            Authorization: `Bearer ${EntryLocalStorage.SESSION.getToken()}`,
          },
        }
      );
      return response.status === 201;
    } catch {
      return false;
    }
  },
};
