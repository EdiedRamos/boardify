import { Box } from "@chakra-ui/react";

import { BoardMock } from "@/Pages/Dashboard/data";

import { TaskColumn, StatusForm } from "@/Components/Organisms";

export const Board = (): JSX.Element => {
  return (
    <Box
      display="flex"
      h="calc(100vh - 80px)"
      overflowX="auto"
      overflowY="hidden"
      gap={5}
      ml={{ base: 0, md: 60 }}
      p="4"
    >
      {BoardMock.map((board, index) => (
        <TaskColumn {...{ ...board, index }} />
      ))}
      <StatusForm />
    </Box>
  );
};
