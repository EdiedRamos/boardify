import { Stack, Tag } from "@chakra-ui/react";
import { TaskPreview } from "@/Components/Molecules";

import { IBoard } from "@/Types";

interface TaskColumnI extends IBoard {
  index: number;
}

export const TaskColumn = (props: TaskColumnI): JSX.Element => {
  return (
    <Stack>
      <Tag
        justifyContent="center"
        size="md"
        colorScheme={
          ["whatsapp", "messenger", "twitter", "facebook", "linkedin"][
            props.index % 5
          ]
        }
      >
        {props.status} ({props.taskList.length})
      </Tag>
      <Stack overflowX="hidden" overflowY="auto">
        {props.taskList.map(({ title, text }) => (
          <TaskPreview key={title} title={title} text={text} />
        ))}
      </Stack>
    </Stack>
  );
};
