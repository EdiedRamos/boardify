import { useSessionStore } from "@/Store/Session/session.store";
import type { LoginDataType } from "@/Types";

type ValidateType = Partial<LoginDataType>;

export const SignInController = () => {
  const { login } = useSessionStore();

  const initialValues: LoginDataType = {
    username: "",
    password: "",
  };

  const onSubmit = (values: LoginDataType): void => {
    login(values);
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

  return { initialValues, onSubmit, validate };
};
