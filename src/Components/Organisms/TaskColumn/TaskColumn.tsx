import { Stack, Tag } from "@chakra-ui/react";
import { TaskPreview } from "@/Components/Molecules";

import { TaskColumnController } from "./TaskColumnController";

import type { TopicType } from "@/Types";

type TaskColumnType = TopicType & {
  index: number;
};

export const TaskColumn = (props: TaskColumnType): JSX.Element => {
  const { tasks } = TaskColumnController();

  return (
    <Stack w="sm">
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
      <Stack overflowX="hidden" overflowY="auto">
        {tasks.map(({ id, title, subtitle }) => (
          <TaskPreview key={id} title={title} text={subtitle ?? ""} />
        ))}
      </Stack>
    </Stack>
  );
};
