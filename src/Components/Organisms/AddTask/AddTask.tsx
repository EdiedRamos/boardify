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
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, FieldArray, Form, Formik } from "formik";
import { useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";

import { SessionMiddleware } from "@/Components/Middlewares";

import { AddTaskController } from "./AddTaskController";

export const AddTask = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { initialValues, onSubmit, validate, isDisabled, taskGroupList } =
    AddTaskController({
      onClose,
    });

  const initialRef = useRef(null);

  return (
    <SessionMiddleware fallback={<></>}>
      <Button colorScheme="messenger" onClick={onOpen} isDisabled={isDisabled}>
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
                  <FormControl isRequired isInvalid={!!props.errors.title}>
                    <FormLabel>Title</FormLabel>
                    <Input
                      as={Field}
                      ref={initialRef}
                      placeholder="e.g Take coffee break"
                      name="title"
                    />
                    <FormErrorMessage>{props.errors.title}</FormErrorMessage>
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
                  <FieldArray name="subtaskList">
                    {({ push, remove }) => (
                      <FormControl isInvalid={!!props.errors.subtaskList}>
                        <FormLabel>Subtasks</FormLabel>
                        {props.values.subtaskList.map((_, index) => (
                          <Flex align="center" gap={2} key={index}>
                            <Input
                              as={Field}
                              placeholder="e.g It's always good to take a break."
                              name={`subtaskList.${index}.title`}
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
                        <Button
                          w="full"
                          my={3}
                          colorScheme="gray"
                          onClick={() => push({ title: "" })}
                        >
                          + Add New Subtask
                        </Button>
                      </FormControl>
                    )}
                  </FieldArray>
                  {/* STATUS */}
                  <FormControl isRequired isInvalid={!!props.errors.status}>
                    <FormLabel>Status</FormLabel>
                    {/* <Field
                      as={Select}
                      name="status"
                      placeholder="Select the status"
                    >
                      {taskGroupList?.map(({ id, status }) => (
                        <option key={id} value={id}>
                          {status.length > 10
                            ? status.substring(0, 10).concat("...")
                            : status}{" "}
                          {id}
                        </option>
                      ))}
                    </Field> */}
                    <FormErrorMessage>{props.errors.status}</FormErrorMessage>
                  </FormControl>
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
