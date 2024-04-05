export type BoardBaseType = {
  id: number;
  name: string;
};

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
  id: number;
  title: string;
  description: string;
  status: TaskGroupBaseType;
  subtaskList: SubtaskType[];
};

export type TaskGroupType = TaskGroupBaseType & {
  taskList: TaskType[];
};

export type BoardType = BoardBaseType & {
  taskGroupList: TaskGroupType[];
};

export type DashboardType = {
  boardList: BoardType[];
};
