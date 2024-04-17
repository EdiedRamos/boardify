import { TaskCreationType } from "@/Types";

type ValidateType = {
  [K in keyof TaskCreationType]?: string;
};

export const validate = (values: TaskCreationType) => {
  const errors: ValidateType = {};

  console.log({ values });

  const isEmptyName = values.name.trim().length === 0;
  if (isEmptyName) {
    errors.name = "Name is required";
  }

  const isDescriptionEmpty = values.description.trim().length === 0;
  if (isDescriptionEmpty) {
    errors.description = "Description is required";
  }

  const areEmptyTaskItems = values.taskItems.filter((task) => {
    return task.content.trim().length === 0;
  });
  if (areEmptyTaskItems.length > 0) {
    errors.taskItems = "There are empty fields";
  }

  return errors;
};
