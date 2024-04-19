import type { TaskType } from "@/Types";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Task } from "../Task/Task";
import { TaskOptions } from "../TaskOptions/TaskOptions";

type TaskPreviewProps = {
  task: TaskType;
  onDelete: (task: TaskType) => void;
};

export const TaskPreview = ({
  task,
  onDelete,
}: TaskPreviewProps): JSX.Element => {
  const hoverBgColor = useColorModeValue("gray.50", "gray.600");

  return (
    <Task taskId={task.id}>
      {({ onClick }) => (
        <Card
          onClick={onClick}
          variant="elevated"
          position={"relative"}
          transition="all 250ms"
          _hover={{
            cursor: "pointer",
            // bg: "gray.50",
            bg: hoverBgColor,
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
