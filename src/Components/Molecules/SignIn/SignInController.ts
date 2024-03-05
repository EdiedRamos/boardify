type ValuesType = {
  email: string;
  password: string;
};

type ValidateType = Partial<ValuesType>;

export const SignInController = () => {
  const initialValues: ValuesType = {
    email: "",
    password: "",
  };

  const onSubmit = (values: ValuesType): void => {
    alert(JSON.stringify(values));
  };

  const validate = (values: ValuesType): ValidateType => {
    const errors: ValidateType = {};

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

  return { initialValues, onSubmit, validate };
};
