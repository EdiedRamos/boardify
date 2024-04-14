import { TaskPreview } from "@/Components/Molecules";
import { Stack, Tag } from "@chakra-ui/react";

import {
  TaskColumnController,
  type TaskColumnType,
} from "./TaskColumnController";

export const TaskColumn = (props: TaskColumnType): JSX.Element => {
  const { tasks, ref, sentry } = TaskColumnController(props);

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
        border={sentry?.isIntersecting ? "2px solid red" : ""}
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
