import type { TopicType } from "@/Types";

import { TopicOptions, TaskPreview } from "@/Components/Molecules";
import { Flex, Stack, Tag } from "@chakra-ui/react";

import { AddTask } from "@/Components/Molecules";
import { TaskColumnController } from "./TaskColumnController";

export type PropsType = TopicType & {
  index: number;
};

export const TaskColumn = (props: PropsType): JSX.Element => {
  const { tasks, ref, handleDelete } = TaskColumnController(props);

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
          <TopicOptions topic={{ id: props.id, name: props.name }} />
        </Flex>
      </Flex>
      <AddTask topic={{ id: props.id, name: props.name }} />
      <Stack overflowX="hidden" overflowY="auto">
        {tasks.map((task) => (
          <TaskPreview key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </Stack>
    </Stack>
  );
};
