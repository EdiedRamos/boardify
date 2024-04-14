import { Center, CircularProgress } from "@chakra-ui/react";

type PropsType = {
  show: boolean;
};

export const CircularLoader = ({ show }: PropsType): JSX.Element => {
  if (!show) return <></>;
  return (
    <Center w="full">
      <CircularProgress isIndeterminate color="purple.500" />
    </Center>
  );
};
