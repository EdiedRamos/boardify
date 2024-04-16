export const getTitle = (isUpdating: boolean): string => {
  return isUpdating ? "Update Task" : "Add New Task";
};
