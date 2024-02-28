import { Box } from "@chakra-ui/react";

import { AddTaskGroup, TaskColumn } from "@/Components/Organisms";

import { useDashboardStore } from "@/Store";

export const Board = (): JSX.Element => {
  const { boards, currentBoard } = useDashboardStore();

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
      {boards.boardList
        .find((board) => board.id === currentBoard)
        ?.taskGroupList.map((board, index) => (
          <TaskColumn {...{ ...board, index }} />
        ))}
      <AddTaskGroup />
    </Box>
  );
};
