import type { LoginDataType, SignUpDataType } from "@/Types";

import axios, { type AxiosResponse } from "axios";

import { API_BASE_URL } from "@/Domain/Constants";
import { EntryLocalStorage } from "../LocalStorage";

type LoginResponse = {
  refreshToken: string;
  token: string;
};

export const SessionService = {
  async login(loginData: LoginDataType): Promise<boolean> {
    const response: AxiosResponse<LoginResponse> =
      await axios.post<LoginResponse>(
        API_BASE_URL.concat("/auth/login/"),
        loginData
      );
    // TODO: Use the status code
    if (typeof response.data === "string") return false;
    EntryLocalStorage.SESSION.login(response.data.token);
    return true;
  },
  logout(): void {
    EntryLocalStorage.SESSION.logout();
  },
  // * USER
  async createUser(signUpData: SignUpDataType): Promise<boolean> {
    try {
      const response: AxiosResponse<unknown> = await axios.post<unknown>(
        API_BASE_URL.concat("/users/"),
        signUpData
      );
      return response.status === 201;
    } catch {
      return false;
    }
  },
};
