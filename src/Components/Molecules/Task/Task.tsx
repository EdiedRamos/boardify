import {
  Checkbox,
  Divider,
  Heading,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Tag,
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
      {task !== null && (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Skeleton height={"100%"} w={200} isLoaded={!isLoading}>
                <Heading size={"md"}>{task.name}</Heading>
              </Skeleton>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody py={3}>
              <Skeleton height={"100%"} w={"full"} isLoaded={!isLoading}>
                <Text>{task.description}</Text>
              </Skeleton>
              <Skeleton height={"100%"} w={"full"} isLoaded={!isLoading}>
                {task.taskItems.length > 0 && (
                  <List spacing={2}>
                    <Divider my={3} />
                    {task.taskItems.map((item) => (
                      <ListItem key={item.id}>
                        <Checkbox
                          onChange={() => handleCheck(item)}
                          isChecked={item.isDone}
                        >
                          <Tag colorScheme={item.isDone ? "green" : "gray"}>
                            {item.content}
                          </Tag>
                        </Checkbox>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Skeleton>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
