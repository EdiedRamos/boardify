import { Box } from "@chakra-ui/react";

import { EmptySection } from "@/Components/Molecules";
import { AddTopic, TaskColumn } from "@/Components/Organisms";

import { BoardController } from "./BoardController";
import { CircularLoader } from "@/Components/Atoms";

export const Board = (): JSX.Element => {
  const { currentBoard, topics, isLoadingTopics } = BoardController();

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
          <CircularLoader show={isLoadingTopics} />
          {!isLoadingTopics && (
            <>
              {topics.map((topic, index) => (
                <TaskColumn key={topic.id} {...{ ...topic, index }} />
              ))}
              <AddTopic />
            </>
          )}
        </Box>
      )}
    </>
  );
};
