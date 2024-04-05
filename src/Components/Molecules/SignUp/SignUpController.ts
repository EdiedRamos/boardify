import { useLocalToast } from "@/Core/Hooks";
import { TOAST_SIGNUP } from "@/Domain/Constants";
import { SessionService } from "@/Services/Session/session.service";
import type { SignUpDataType } from "@/Types";
import { useState } from "react";

type ValidateType = Partial<SignUpDataType>;

export const SignUpController = () => {
  const initialValues: SignUpDataType = {
    username: "",
    email: "",
    password: "",
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toast = useLocalToast();

  const onSubmit = (values: SignUpDataType) => {
    setIsLoading(true);
    SessionService.createUser(values)
      .then((status) => {
        if (status) {
          toast.fire(TOAST_SIGNUP.SUCCESS);
        } else {
          toast.fire(TOAST_SIGNUP.FAILURE);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const validate = (values: SignUpDataType): ValidateType => {
    const errors: ValidateType = {};

    const isUsernameEmpty = values.username.trim().length === 0;
    if (isUsernameEmpty) {
      errors.username = "Name is required";
    }

    const isEmailEmpty = values.email.trim().length === 0;
    if (isEmailEmpty) {
      errors.email = "Email is required";
    }

    const isPasswordEmpty = values.password.trim().length === 0;
    if (isPasswordEmpty) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return { initialValues, onSubmit, validate, isLoading };
};
