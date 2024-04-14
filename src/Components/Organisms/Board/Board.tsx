import { Box } from "@chakra-ui/react";

import { EmptySection } from "@/Components/Molecules";
import { AddTopic, TaskColumn } from "@/Components/Organisms";

import { BoardController } from "./BoardController";

export const Board = (): JSX.Element => {
  const { currentBoard, topics } = BoardController();

  return (
    <>
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
          {topics.map((topic, index) => (
            <TaskColumn key={topic.id} {...{ ...topic, index }} />
          ))}
          <AddTopic />
        </Box>
      )}
    </>
  );
};
