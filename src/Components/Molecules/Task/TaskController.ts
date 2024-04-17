import { TaskService } from "@/Services";
import { TaskType } from "@/Types";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

type PropsType = {
  taskId: string;
};

export const TaskController = ({ taskId }: PropsType) => {
  const [task, setTask] = useState<TaskType | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => {
    onOpen();
    setIsLoading(true);
    TaskService.getById(taskId)
      .then((data) => setTask(data))
      .finally(() => setIsLoading(false));
  };

  return {
    task,
    isOpen,
    onOpen,
    onClose,
    isLoading,
    handleOpen,
  };
};
