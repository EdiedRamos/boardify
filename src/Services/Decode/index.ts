import { EntryLocalStorage } from "../LocalStorage";
import { DecodeService } from "./decode.service";

export const EntryDecoded = {
  SESSION: {
    getSub() {
      const token = EntryLocalStorage.SESSION.getToken();
      return DecodeService.getSub(token);
    },
  },
};
