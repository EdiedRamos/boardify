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
import { useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";

import { SessionMiddleware } from "@/Components/Atoms";

import { AddTaskController } from "./AddTaskController";

type PropsType = {
  topicId: string;
};

export const AddTask = ({ topicId }: PropsType): JSX.Element => {
  const {
    initialValues,
    onSubmit,
    validate,
    isDisabled,
    isOpen,
    handleOpen,
    onClose,
  } = AddTaskController();

  const initialRef = useRef(null);

  return (
    <SessionMiddleware fallback={<></>}>
      <Button
        colorScheme="messenger"
        onClick={() => handleOpen(topicId)}
        isDisabled={isDisabled}
      >
        + New Task
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Task</ModalHeader>
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
                      ref={initialRef}
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
