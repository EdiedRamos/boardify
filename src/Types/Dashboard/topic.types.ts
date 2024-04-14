import { ResponseI } from "../Response/response.types";

export type TopicType = {
  id: string;
  name: string;
};

// * Response type
export interface GetAllTopicsI extends ResponseI {
  content: TopicType[];
}
