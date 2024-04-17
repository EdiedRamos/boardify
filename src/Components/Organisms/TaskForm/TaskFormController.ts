import type { TaskCreationType, TaskType, TopicType } from "@/Types";

import { useDisclosure } from "@chakra-ui/react";

import { useBoard } from "@/Core/Hooks/useBoard";
import { TaskService } from "@/Services";
import { validate } from "./validators";
import { useState, useRef } from "react";

type PropsType = {
  isUpdating: boolean;
};

export const TaskFormController = ({ isUpdating }: PropsType) => {
  const [initialValues, setInitialValues] = useState<TaskCreationType>({
    name: "",
    description: "",
    topicId: "",
    taskItems: [],
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const board = useBoard();
  const taskRef = useRef<string | null>(null);

  const onSubmit = (values: TaskCreationType) => {
    // * updating
    if (isUpdating) {
      if (!taskRef.current) return;
      TaskService.updateTask(taskRef.current, values);
    } else {
      if (!board?.currentTopic) {
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
    }
    onClose();
  };

  const handleCreate = (topic: TopicType) => {
    board?.handleTopic(topic);
    onOpen();
  };

  const handleUpdate = (task: TaskType) => {
    // console.log({ task });
    TaskService.getById(task.id).then((currentTask) => {
      if (!currentTask) return;
      console.log({ currentTask });
      taskRef.current = task.id;
      setInitialValues(currentTask);
      onOpen();
    });
    // task.taskItems = ["primero", "segundo"];
    // setInitialValues(task);
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
