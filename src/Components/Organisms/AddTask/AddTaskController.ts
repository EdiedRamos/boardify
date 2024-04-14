import { useDashboardStore } from "@/Store";
import type { TaskType } from "@/Types";

export type ValuesType = Omit<TaskType, "id" | "subtaskList" | "status"> & {
  subtaskList: { title: string }[];
  status: string;
};

type ValidateType = Partial<Omit<ValuesType, "status"> & { status: string }>;

type AddBoardControllerType = {
  onClose: () => void;
};

export const AddTaskController = ({ onClose }: AddBoardControllerType) => {
  // const { addTask, boards, currentBoard } = useDashboardStore();
  const { addTask, topics } = useDashboardStore();

  const initialValues: ValuesType = {
    title: "",
    description: "",
    subtaskList: [{ title: "" }],
    status: "",
  };

  const onSubmit = (values: ValuesType) => {
    addTask(values);
    onClose();
  };

  const validate = (values: ValuesType) => {
    const errors: ValidateType = {};

    const isTitleEmpty = values.title.trim().length === 0;
    if (isTitleEmpty) {
      errors.title = "Name is required";
    }

    const isDescriptionEmpty = values.description.trim().length === 0;
    if (isDescriptionEmpty) {
      errors.description = "Description is required";
    }

    const isStatusEmpty = +values.status === 0;
    if (isStatusEmpty) {
      errors.status = "Status is required";
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
