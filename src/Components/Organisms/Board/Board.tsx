import { Box } from "@chakra-ui/react";

import { SessionMiddleware } from "@/Components/Middlewares";
import { EmptySection } from "@/Components/Molecules";
import { AddTaskGroup, Landing, TaskColumn } from "@/Components/Organisms";
import { useDashboardStore } from "@/Store";

export const Board = (): JSX.Element => {
  const { boards, currentBoard } = useDashboardStore();

  return (
    <SessionMiddleware fallback={<Landing />}>
      {currentBoard === null || currentBoard === undefined ? (
        <EmptySection />
      ) : (
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
      )}
    </SessionMiddleware>
  );
};
