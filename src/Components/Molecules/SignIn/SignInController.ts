import type { LoginDataType } from "@/Types";

import { useState } from "react";

import { useLocalToast } from "@/Core/Hooks";
import { TOAST_LOGIN } from "@/Domain/Constants";
import { useSessionStore } from "@/Store/Session/session.store";

type ValidateType = Partial<LoginDataType>;

export const SignInController = () => {
  const { login } = useSessionStore();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toast = useLocalToast();

  const initialValues: LoginDataType = {
    username: "",
    password: "",
  };

  const onSubmit = (values: LoginDataType): void => {
    setIsLoading(true);
    login(values).then((status) => {
      if (status) {
        toast.fire(TOAST_LOGIN.SUCCESS);
      } else {
        setIsLoading(false);
        toast.fire(TOAST_LOGIN.FAILURE);
      }
    });
  };

  const validate = (values: LoginDataType): ValidateType => {
    const errors: ValidateType = {};

    const isEmailEmpty = values.username.trim().length === 0;
    if (isEmailEmpty) {
      errors.username = "Email is required";
    }

    const isPasswordEmpty = values.password.trim().length === 0;
    if (isPasswordEmpty) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return { initialValues, onSubmit, validate, isLoading };
};
