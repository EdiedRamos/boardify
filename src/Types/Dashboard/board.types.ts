import type { ResponseI } from "../Response/response.types";

export type BoardType = {
  id: string;
  name: string;
};

// * Response type
export interface GetAllBoardsI extends ResponseI {
  content: BoardType[];
}
