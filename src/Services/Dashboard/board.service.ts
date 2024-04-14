import { type AxiosResponse } from "axios";

import type { BoardType, GetAllBoardsI } from "@/Types";

import { baseAxios } from "@/Domain/Config";

export const BoardService = {
  async createBoard(board: Omit<BoardType, "id">): Promise<BoardType | null> {
    try {
      const response: AxiosResponse<BoardType> = await baseAxios
        .create()
        .post<BoardType>("boards/", board);
      if (response.status === 201) {
        return response.data;
      }
      return null;
    } catch {
      return null;
    }
  },

  async getAllBoards(): Promise<Array<BoardType>> {
    try {
      const response: AxiosResponse<GetAllBoardsI> = await baseAxios
        .create()
        .get<GetAllBoardsI>("boards/");
      return response.data.content;
    } catch {
      return [];
    }
  },

  async deleteBoard(boardId: string): Promise<boolean> {
    try {
      await baseAxios.create().delete<unknown>(`boards/${boardId}/`);
      return true;
    } catch {
      return false;
    }
  },
};
