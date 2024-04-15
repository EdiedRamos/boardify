import { TaskPreview } from "@/Components/Molecules";
import { Stack, Tag } from "@chakra-ui/react";

import {
  TaskColumnController,
  type TaskColumnType,
} from "./TaskColumnController";
import { AddTask } from "../AddTask/AddTask";

export const TaskColumn = (props: TaskColumnType): JSX.Element => {
  const { tasks, ref } = TaskColumnController(props);

  return (
    <Stack w="sm" ref={ref}>
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
      <AddTask />
      <Stack overflowX="hidden" overflowY="auto">
        {tasks.map(({ id, name, description }) => (
          <TaskPreview key={id} title={name} text={description ?? ""} />
        ))}
      </Stack>
    </Stack>
  );
};
