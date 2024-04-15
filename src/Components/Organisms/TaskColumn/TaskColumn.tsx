import { TopicOptions, TaskPreview } from "@/Components/Molecules";
import { Flex, Stack, Tag } from "@chakra-ui/react";

import { AddTask } from "../AddTask/AddTask";
import {
  TaskColumnController,
  type TaskColumnType,
} from "./TaskColumnController";

export const TaskColumn = (props: TaskColumnType): JSX.Element => {
  const { tasks, ref } = TaskColumnController(props);

  return (
    <Stack w="sm" ref={ref}>
      <Flex position={"relative"} align={"center"}>
        <Tag
          w="sm"
          p={2}
          justifyContent="center"
          colorScheme={
            ["whatsapp", "purple", "twitter", "facebook", "linkedin"][
              props.index % 5
            ]
          }
        >
          {props.name} ({tasks?.length})
        </Tag>
        <Flex position={"absolute"} gap={2} right={3}>
          <TopicOptions />
        </Flex>
      </Flex>
      <AddTask topicId={props.id} />
      <Stack overflowX="hidden" overflowY="auto">
        {tasks.map(({ id, name, description }) => (
          <TaskPreview key={id} title={name} text={description ?? ""} />
        ))}
      </Stack>
    </Stack>
  );
};
