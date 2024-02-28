import { useDashboardStore } from "@/Store";
import { TaskGroupBaseType } from "@/Types";

type ValuesType = Omit<TaskGroupBaseType, "id">;

type AddTaskGroupControllerType = {
  onClose: () => void;
};

export const AddTaskGroupController = ({
  onClose,
}: AddTaskGroupControllerType) => {
  const { addTaskGroup } = useDashboardStore();

  const initialValues: ValuesType = {
    status: "",
  };

  const onSubmit = (values: ValuesType) => {
    addTaskGroup(values);
    onClose();
  };

  const validate = (values: ValuesType) => {
    const errors: Partial<ValuesType> = {};

    const isStatusEmpty = values.status.trim().length === 0;
    if (isStatusEmpty) {
      errors.status = "Column name is required";
    }

    return errors;
  };

  return { initialValues, onSubmit, validate };
};
