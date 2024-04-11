import { useDashboardStore } from "@/Store";
import type { BoardType } from "@/Types";

type ValuesType = Omit<BoardType, "id">;

type AddBoardControllerType = {
  onFinish?: () => void;
  isCreating: boolean;
  onClose: () => void;
};

export const BoardFormController = ({
  onClose,
  isCreating,
  onFinish,
}: AddBoardControllerType) => {
  const { addBoard, updateBoard } = useDashboardStore();

  const initialValues: ValuesType = {
    name: "",
  };

  const onCreate = (values: ValuesType): void => {
    addBoard(values);
  };

  const onUpdate = (values: ValuesType): void => {
    updateBoard(values);
  };

  const onSubmit = (values: ValuesType): void => {
    if (isCreating) {
      onCreate(values);
    } else {
      onUpdate(values);
    }
    onClose();
    onFinish && onFinish();
  };

  const validate = (values: ValuesType) => {
    const errors: Partial<ValuesType> = {};

    const isNameEmpty = values.name.trim().length === 0;
    if (isNameEmpty) {
      errors.name = "Name is required";
    }

    return errors;
  };

  return {
    initialValues,
    onSubmit,
    validate,
  };
};
