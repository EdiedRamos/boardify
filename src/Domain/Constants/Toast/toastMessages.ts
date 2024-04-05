import { TOAST_STATUS } from "./toastStatus";

export const TOAST_LOGIN = {
  SUCCESS: {
    title: "Success Login",
    description: "Welcome",
    status: TOAST_STATUS.SUCCESS,
  },
  FAILURE: {
    title: "Wrong Credentials",
    description: "Invalid username or password",
    status: TOAST_STATUS.ERROR,
  },
};
