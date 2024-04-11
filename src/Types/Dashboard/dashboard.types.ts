export type TaskGroupBaseType = {
  id: number;
  status: string;
};

export type SubtaskType = {
  id: number;
  title: string;
  state: boolean;
};

export type TaskType = {
  id: string;
  title: string;
  description: string;
  status: TaskGroupBaseType;
  subtaskList: SubtaskType[];
};

export type TaskGroupType = TaskGroupBaseType & {
  taskList: TaskType[];
};
