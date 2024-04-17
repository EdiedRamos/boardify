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
import { Task } from "../Task/Task";

type TaskPreviewProps = {
  task: TaskType;
  onDelete: (task: TaskType) => void;
};

export const TaskPreview = ({
  task,
  onDelete,
}: TaskPreviewProps): JSX.Element => {
  return (
    <Task>
      {({ onClick }) => (
        <Card
          onClick={onClick}
          variant="elevated"
          position={"relative"}
          transition="all 250ms"
          _hover={{
            cursor: "pointer",
            bg: "gray.50",
            transform: "scale(0.98)",
          }}
        >
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
      )}
    </Task>
  );
};
