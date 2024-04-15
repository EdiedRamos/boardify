import { useDashboardStore } from "@/Store";
import type { TaskCreationType } from "@/Types";

type ValidateType = {
  [K in keyof TaskCreationType]?: string;
};

type AddBoardControllerType = {
  onClose: () => void;
};

export const AddTaskController = ({ onClose }: AddBoardControllerType) => {
  // const { addTask, boards, currentBoard } = useDashboardStore();
  const { addTask, topics } = useDashboardStore();

  const initialValues: TaskCreationType = {
    name: "",
    description: "",
    topicId: "",
    taskItems: [],
  };

  const onSubmit = (values: TaskCreationType) => {
    addTask(values);
    onClose();
  };

  const validate = (values: TaskCreationType) => {
    const errors: ValidateType = {};

    const isEmptyName = values.name.trim().length === 0;
    if (isEmptyName) {
      errors.name = "Name is required";
    }

    const isDescriptionEmpty = values.description.trim().length === 0;
    if (isDescriptionEmpty) {
      errors.description = "Description is required";
    }

    const isEmptyTopic = +values.topicId === 0;
    if (isEmptyTopic) {
      errors.topicId = "Status is required";
    }

    const areEmptyTaskItems = values.taskItems.filter((task) => {
      if (typeof task !== "string") return false;
      return task.trim().length === 0;
    });
    if (areEmptyTaskItems.length > 0) {
      console.log("must appear an error");
      errors.taskItems = "There are empty fields";
    }

    return errors;
  };

  return {
    initialValues,
    onSubmit,
    validate,
    isDisabled: topics.length === 0,
    topics,
  };
};
