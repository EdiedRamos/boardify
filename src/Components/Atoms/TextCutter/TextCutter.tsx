type PropsType = {
  maxLength: number;
  children: string;
};

export const TextCutter = ({ children, maxLength }: PropsType): JSX.Element => {
  return (
    <>
      {children.length > maxLength
        ? children.substring(0, maxLength).concat("...")
        : children}
    </>
  );
};
