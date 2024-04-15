import { useDashboardStore } from "@/Store";
import type { TaskCreationType } from "@/Types";
import { useDisclosure } from "@chakra-ui/react";
import { validate } from "./validators";
import { useBoard } from "@/Core/Hooks/useBoard";

export const AddTaskController = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addTask, topics } = useDashboardStore();
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
    addTask(values);
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
    topics,
    isOpen,
    onClose,
    handleOpen,
  };
};
