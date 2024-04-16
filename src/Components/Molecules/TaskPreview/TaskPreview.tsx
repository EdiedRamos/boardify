import type { TaskType } from "@/Types";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { TaskOptions } from "../TaskOptions/TaskOptions";

type TaskPreviewProps = {
  task: TaskType;
  onDelete: (task: TaskType) => void;
};

export const TaskPreview = ({
  task,
  onDelete,
}: TaskPreviewProps): JSX.Element => {
  return (
    <Card variant="elevated" position={"relative"}>
      <Box position={"absolute"} right={3}>
        <TaskOptions task={task} onDelete={onDelete} />
      </Box>
      <CardHeader>
        <Heading size="md">{task.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{task.description}</Text>
      </CardBody>
    </Card>
  );
};
