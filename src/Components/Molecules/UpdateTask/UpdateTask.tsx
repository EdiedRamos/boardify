import { TaskForm } from "@/Components/Organisms";
import { TaskType } from "@/Types";

type ChildrenProps = {
  onClick: (task: TaskType) => void;
};

type PropsType = {
  children: (props: ChildrenProps) => JSX.Element;
};

export const UpdateTask = ({ children }: PropsType) => {
  return (
    <TaskForm isUpdating>
      {(props) => children({ onClick: props.onUpdate })}
    </TaskForm>
  );
};
