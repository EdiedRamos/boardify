import { useBoard } from "@/Core/Hooks/useBoard";
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
  const { addTopic, updateTopic } = useDashboardStore();

  const board = useBoard();

  const initialValues: ValuesType = {
    name: isUpdating ? board?.currentTopic?.name ?? "" : "",
  };

  const onSubmit = (values: ValuesType) => {
    if (isUpdating) {
      if (!board?.currentTopic) {
        return;
      }
      const update: TopicType = {
        id: board.currentTopic.id,
        name: values.name,
      };
      updateTopic(update);
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
