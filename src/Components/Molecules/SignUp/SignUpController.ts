type ValuesType = {
  name: string;
  email: string;
  password: string;
};

type ValidateType = Partial<ValuesType>;

export const SignUpController = () => {
  const initialValues: ValuesType = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values: ValuesType) => {
    alert(JSON.stringify(values));
  };

  const validate = (values: ValuesType): ValidateType => {
    const errors: ValidateType = {};

    const isNameEmpty = values.name.trim().length === 0;
    if (isNameEmpty) {
      errors.name = "Name is required";
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

  return { initialValues, onSubmit, validate };
};
