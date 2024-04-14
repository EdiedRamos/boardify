type PropsType = {
  children: React.ReactNode;
  render: boolean;
};

export const RenderWrapper = ({
  children,
  render,
}: PropsType): React.ReactNode => {
  if (!render) return <></>;
  return children;
};
