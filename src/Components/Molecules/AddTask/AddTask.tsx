import { TaskForm } from "@/Components/Organisms";
import { TopicType } from "@/Types";
import { Button } from "@chakra-ui/react";

type PropsType = {
  topic: TopicType;
};

export const AddTask = ({ topic }: PropsType) => {
  return (
    <TaskForm>
      {({ onCreate }) => (
        <Button colorScheme="messenger" onClick={() => onCreate(topic)}>
          + New Task
        </Button>
      )}
    </TaskForm>
  );
};
