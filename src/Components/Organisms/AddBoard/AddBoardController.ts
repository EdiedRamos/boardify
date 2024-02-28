import { useDashboardStore } from "@/Store";
import type { BoardBaseType } from "@/Types";

type ValuesType = Omit<BoardBaseType, "id">;

type AddBoardControllerType = {
  onClose: () => void;
};

export const AddBoardController = ({ onClose }: AddBoardControllerType) => {
  const { addBoard } = useDashboardStore();

  const initialValues: ValuesType = {
    name: "",
  };

  const onSubmit = (values: ValuesType) => {
    addBoard(values);
    onClose();
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
