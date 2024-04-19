import { useContext } from "react";

import { TaskContext } from "@/Context";

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) return;
  return context;
};
