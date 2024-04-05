export type LoginDataType = {
  username: string;
  password: string;
};

export type SignUpDataType = LoginDataType & {
  email: string;
};
