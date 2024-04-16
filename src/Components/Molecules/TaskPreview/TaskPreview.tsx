import type { TaskType } from "@/Types";

import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

type TaskPreviewProps = {
  task: TaskType;
  onDelete: (task: TaskType) => void;
};

export const TaskPreview = ({
  task,
  onDelete,
}: TaskPreviewProps): JSX.Element => {
  return (
    <Card variant="elevated">
      <CardHeader>
        <Heading size="md">{task.name}</Heading>
        <button onClick={() => onDelete(task)}>DELETE</button>
      </CardHeader>
      <CardBody>
        <Text>{task.description}</Text>
      </CardBody>
    </Card>
  );
};
