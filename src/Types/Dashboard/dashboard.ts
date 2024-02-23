export type ITask = {
  title: string;
  text: string;
};

export type IBoard = {
  status: string;
  taskList: ITask[];
};
