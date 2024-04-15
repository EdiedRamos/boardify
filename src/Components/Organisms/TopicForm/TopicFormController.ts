import { useDashboardStore } from "@/Store";
import { TopicType } from "@/Types";

type ValuesType = Omit<TopicType, "id">;

type AddTaskGroupControllerType = {
  onClose: () => void;
  isUpdating: boolean;
};

export const TopicFormController = ({
  onClose,
  isUpdating,
}: AddTaskGroupControllerType) => {
  const { addTopic } = useDashboardStore();

  const initialValues: ValuesType = {
    name: "",
  };

  const onSubmit = (values: ValuesType) => {
    if (isUpdating) {
      alert("COMING SOON");
    } else {
      addTopic(values);
    }

    onClose();
  };

  const validate = (values: ValuesType) => {
    const errors: Partial<ValuesType> = {};

    const isNameEmpty = values.name.trim().length === 0;
    if (isNameEmpty) {
      errors.name = "Column name is required";
    }

    return errors;
  };

  return { initialValues, onSubmit, validate };
};
