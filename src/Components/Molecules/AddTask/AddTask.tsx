import { TaskForm } from "@/Components/Organisms";
import { TopicType } from "@/Types";
import { Button } from "@chakra-ui/react";

type PropsType = {
  topic: TopicType;
};

export const AddTask = ({ topic }: PropsType) => {
  return (
    <TaskForm>
      {({ onClick }) => (
        <Button colorScheme="messenger" onClick={() => onClick(topic)}>
          + New Task
        </Button>
      )}
    </TaskForm>
  );
};
