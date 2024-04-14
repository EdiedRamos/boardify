import axios from "axios";

import { API_BASE_URL } from "@/Domain/Constants";
import { EntryLocalStorage } from "@/Services/LocalStorage";

export const baseAxios = axios.create({
  baseURL: `${API_BASE_URL}/`,
  headers: {
    "ngrok-skip-browser-warning": "boardify",
    Authorization: `Bearer ${EntryLocalStorage.SESSION.getToken()}`,
  },
});
