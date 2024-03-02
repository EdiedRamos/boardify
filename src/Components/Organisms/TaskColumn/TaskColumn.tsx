import { Stack, Tag } from "@chakra-ui/react";
import { TaskPreview } from "@/Components/Molecules";

import type { TaskGroupType } from "@/Types";

interface TaskColumnI extends TaskGroupType {
  index: number;
}

export const TaskColumn = (props: TaskColumnI): JSX.Element => {
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
        {props.status} ({props.taskList?.length})
      </Tag>
      <Stack overflowX="hidden" overflowY="auto">
        {props.taskList.map(({ title, description }) => (
          <TaskPreview key={title} title={title} text={description} />
        ))}
      </Stack>
    </Stack>
  );
};
