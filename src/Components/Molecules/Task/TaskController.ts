import { TaskService } from "@/Services";
import { taskItemService } from "@/Services/Dashboard/taskItem.service";
import { TaskItemType, TaskType } from "@/Types";
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

  const handleCheck = (taskItem: TaskItemType) => {
    taskItemService
      .updateTaskItem({ id: taskItem.id, isDone: !taskItem.isDone })
      .then((updatedItem) => {
        if (!updatedItem) return;
        setTask((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            taskItems: prev?.taskItems.map((item) =>
              item.id === updatedItem.id ? updatedItem : item
            ),
          };
        });
      });
  };

  return {
    task,
    isOpen,
    onOpen,
    onClose,
    isLoading,
    handleOpen,
    handleCheck,
  };
};
