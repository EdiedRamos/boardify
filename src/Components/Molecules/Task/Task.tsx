import {
  Checkbox,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TaskController } from "./TaskController";

type ChildrenProps = {
  onClick: () => void;
};

type PropsType = {
  children: (props: ChildrenProps) => JSX.Element;
  taskId: string;
};

export const Task = ({ children, taskId }: PropsType) => {
  const { task, isOpen, onClose, isLoading, handleOpen, handleCheck } =
    TaskController({
      taskId,
    });

  return (
    <>
      {children({ onClick: handleOpen })}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Skeleton height={"100%"} w={200} isLoaded={!isLoading}>
              <Heading size={"md"}>{task?.name}</Heading>
            </Skeleton>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Skeleton height={"100%"} w={"full"} isLoaded={!isLoading}>
              <Text>{task?.description}</Text>
            </Skeleton>
            <Skeleton height={"100%"} w={"full"} isLoaded={!isLoading}>
              {task?.taskItems ? (
                <Stack>
                  {task.taskItems.map((item) => (
                    <Checkbox
                      onChange={() => handleCheck(item)}
                      isChecked={item.isDone}
                    >
                      {item.content}
                    </Checkbox>
                  ))}
                </Stack>
              ) : (
                <></>
              )}
            </Skeleton>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
