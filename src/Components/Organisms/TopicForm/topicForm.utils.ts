export function getTitle(isUpdating: boolean): string {
  return isUpdating ? "Update the Column" : "Create a New Column";
}
