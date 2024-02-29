import { Box } from "@chakra-ui/react";

import { AddTaskGroup, TaskColumn } from "@/Components/Organisms";

import { useDashboardStore } from "@/Store";
import { EmptySection } from "@/Components/Atoms";

export const Board = (): JSX.Element => {
  const { boards, currentBoard } = useDashboardStore();

  if (currentBoard === null || currentBoard === undefined) {
    return <EmptySection />;
  }

  return (
    <Box
      display="flex"
      h="calc(100vh - 80px)"
      overflowX="auto"
      overflowY="hidden"
      gap={5}
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
