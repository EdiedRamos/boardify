import type { TaskCreationType } from "@/Types";

import { useDisclosure } from "@chakra-ui/react";

import { useBoard } from "@/Core/Hooks/useBoard";
import { TaskService } from "@/Services";
import { useDashboardStore } from "@/Store";
import { validate } from "./validators";

export const AddTaskController = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { topics } = useDashboardStore();
  const board = useBoard();

  const initialValues: TaskCreationType = {
    name: "",
    description: "",
    topicId: "",
    taskItems: [],
  };

  const onSubmit = (values: TaskCreationType) => {
    if (!board?.currentTopic) {
      return;
    }
    values.topicId = board.currentTopic;
    // TODO: Remove this when its not required
    // @ts-expect-error This will be removed soon, so its better this than modify the current types
    values.statusId = 1;
    TaskService.createTask(values).then((task) => {
      if (task) {
        board.taskEmitter(task);
      }
    });
    onClose();
  };

  const handleOpen = (topicId: string) => {
    board?.handleTopic(topicId);
    onOpen();
  };

  return {
    initialValues,
    onSubmit,
    validate,
    isDisabled: topics.length === 0,
    isOpen,
    onClose,
    handleOpen,
  };
};
