import { create } from "zustand";

import type { LoginDataType } from "@/Types";
import { SessionService } from "@/Services/Session/session.service";
import { EntryLocalStorage } from "@/Services/LocalStorage";

export interface ISessionState {
  // * Properties
  isLogged: boolean;
  // * Methods
  login: (data: LoginDataType) => void;
  logout: () => void;
}

export const useSessionStore = create<ISessionState>()((set) => ({
  // * Properties
  isLogged: EntryLocalStorage.SESSION.existToken(),

  // * Methods
  async login(data: LoginDataType) {
    const loginStatus = await SessionService.login(data);
    if (!loginStatus) return;
    set(() => ({
      isLogged: true,
    }));
  },

  logout() {
    SessionService.logout();
    set(() => ({
      isLogged: false,
    }));
  },
}));
