import { useDashboardStore } from "@/Store";
import { TopicType } from "@/Types";

type ValuesType = Omit<TopicType, "id">;

type AddTaskGroupControllerType = {
  onClose: () => void;
};

export const TopicFormController = ({
  onClose,
}: AddTaskGroupControllerType) => {
  const { addTopic } = useDashboardStore();

  const initialValues: ValuesType = {
    name: "",
  };

  const onSubmit = (values: ValuesType) => {
    addTopic(values);
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
