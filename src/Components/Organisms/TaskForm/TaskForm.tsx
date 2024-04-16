import type { TaskType, TopicType } from "@/Types";

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Field, FieldArray, Form, Formik } from "formik";
import { IoIosCloseCircle } from "react-icons/io";

import { SessionMiddleware } from "@/Components/Atoms";

import { TaskFormController } from "./TaskFormController";
import { getTitle } from "./taskForm.utils";

type ChildrenProps = {
  onCreate: (topic: TopicType) => void;
  onUpdate: (task: TaskType) => void;
};

type PropsType = {
  children: (props: ChildrenProps) => JSX.Element;
  isUpdating?: boolean;
};

export const TaskForm = ({
  children,
  isUpdating = false,
}: PropsType): JSX.Element => {
  const {
    initialValues,
    onSubmit,
    validate,
    isOpen,
    handleCreate,
    handleUpdate,
    onClose,
  } = TaskFormController({ isUpdating });

  return (
    <SessionMiddleware fallback={<></>}>
      {children({ onCreate: handleCreate, onUpdate: handleUpdate })}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{getTitle(isUpdating)}</ModalHeader>
          <ModalCloseButton />
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
          >
            {(props) => (
              <Form>
                <ModalBody pb={6}>
                  {/* TITLE */}
                  <FormControl isRequired isInvalid={!!props.errors.name}>
                    <FormLabel>Title</FormLabel>
                    <Input
                      as={Field}
                      placeholder="e.g Take coffee break"
                      name="name"
                    />
                    <FormErrorMessage>{props.errors.name}</FormErrorMessage>
                  </FormControl>
                  {/* DESCRIPTION */}
                  <FormControl
                    isRequired
                    isInvalid={!!props.errors.description}
                  >
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      as={Field}
                      placeholder="e.g It's always good to take a break."
                      name="description"
                    />
                    <FormErrorMessage>
                      {props.errors.description}
                    </FormErrorMessage>
                  </FormControl>
                  {/* SUBTASKS */}
                  <FieldArray name="taskItems">
                    {({ push, remove }) => (
                      <FormControl>
                        <FormLabel>Subtasks</FormLabel>
                        <Stack
                          border={
                            props.errors.taskItems ? "2px solid #eb6e6e" : ""
                          }
                          p={props.errors.taskItems ? 3 : 0}
                          borderRadius={8}
                        >
                          {props.values.taskItems.map((_, index) => (
                            <Flex align="center" gap={2} key={index}>
                              <Input
                                as={Field}
                                placeholder="e.g It's always good to take a break."
                                name={`taskItems.${index}`}
                              />
                              <Icon
                                fontSize={20}
                                transition="500ms"
                                _hover={{
                                  opacity: "80%",
                                  transform: "scale(1.2)",
                                  cursor: "pointer",
                                }}
                                as={IoIosCloseCircle}
                                onClick={() => remove(index)}
                              />
                            </Flex>
                          ))}
                        </Stack>
                        {!!props.errors.taskItems && (
                          <Text color="red.500" fontSize="sm">
                            {props.errors.taskItems}
                          </Text>
                        )}
                        <Button
                          w="full"
                          my={3}
                          colorScheme="gray"
                          onClick={() => push("")}
                        >
                          + Add New Subtask
                        </Button>
                      </FormControl>
                    )}
                  </FieldArray>
                </ModalBody>

                <ModalFooter>
                  <Button type="submit" colorScheme="blue" mr={3}>
                    Create
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </SessionMiddleware>
  );
};
