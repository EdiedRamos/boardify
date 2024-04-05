import { LocalStorageService } from "./localstorage.service";

const { setItem, getItem } = LocalStorageService;

export const EntryLocalStorage = {
  SESSION: {
    login(token: string) {
      setItem("token", token);
    },
    getToken(): string {
      const token: string | null = getItem("token");
      return token ?? "";
    },
    existToken(): boolean {
      return this.getToken().length > 0;
    },
    logout() {
      localStorage.removeItem("token");
    },
  },
};
