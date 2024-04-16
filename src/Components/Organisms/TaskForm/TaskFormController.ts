import type { TaskCreationType, TaskType, TopicType } from "@/Types";

import { useDisclosure } from "@chakra-ui/react";

import { useBoard } from "@/Core/Hooks/useBoard";
import { TaskService } from "@/Services";
import { validate } from "./validators";

type PropsType = {
  isUpdating: boolean;
};

export const TaskFormController = ({ isUpdating }: PropsType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    // * updating
    if (isUpdating) {
      return;
    }
    values.topicId = board.currentTopic.id;
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

  const handleCreate = (topic: TopicType) => {
    board?.handleTopic(topic);
    onOpen();
  };

  const handleUpdate = (task: TaskType) => {
    console.log(task);
    onOpen();
  };

  return {
    initialValues,
    onSubmit,
    validate,
    isOpen,
    onClose,
    handleCreate,
    handleUpdate,
  };
};
