import { type UseToastOptions, useToast } from "@chakra-ui/react";

export const useLocalToast = () => {
  const toast = useToast();

  return {
    fire: ({ title, description, status }: UseToastOptions, time = 3000) =>
      toast({
        title,
        description,
        status,
        duration: time,
        isClosable: true,
      }),
  };
};
