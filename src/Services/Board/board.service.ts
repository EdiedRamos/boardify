import type { BoardType } from "@/Types";

import axios, { type AxiosResponse } from "axios";

import { API_BASE_URL } from "@/Domain/Constants";
import { EntryLocalStorage } from "../LocalStorage";
import { GetAllBoardsI } from "@/Types";

// TODO: Change name cuz this is just for Boards and configure axios for avoidnig boilerplate
export const BoardService = {
  async createBoard(board: Omit<BoardType, "id">): Promise<BoardType | null> {
    try {
      const response: AxiosResponse<BoardType> = await axios.post<BoardType>(
        API_BASE_URL.concat("/boards/"),
        board,
        {
          headers: {
            Authorization: `Bearer ${EntryLocalStorage.SESSION.getToken()}`,
          },
        }
      );
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
      const response: AxiosResponse<GetAllBoardsI> =
        await axios.get<GetAllBoardsI>(API_BASE_URL.concat("/boards/"), {
          headers: {
            "ngrok-skip-browser-warning": "boardify",
            Authorization: `Bearer ${EntryLocalStorage.SESSION.getToken()}`,
          },
        });
      return response.data.content;
    } catch {
      return [];
    }
  },
  async deleteBoard(boardId: string): Promise<boolean> {
    try {
      const response: AxiosResponse<unknown> = await axios.delete<unknown>(
        API_BASE_URL.concat(`/boards/${boardId}/`),
        {
          headers: {
            "ngrok-skip-browser-warning": "boardify",
            Authorization: `Bearer ${EntryLocalStorage.SESSION.getToken()}`,
          },
        }
      );
      console.log({ response });
      return true;
    } catch {
      return false;
    }
  },
};
