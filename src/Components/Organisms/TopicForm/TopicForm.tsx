import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import { TopicFormController } from "./TopicFormController";
import { getTitle } from "./topicForm.utils";

type ChildrenPropsType = {
  onClick: () => void;
};

type PropsType = {
  children: (props: ChildrenPropsType) => JSX.Element;
  isUpdating?: boolean;
};

export const TopicForm = ({
  children,
  isUpdating = false,
}: PropsType): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { initialValues, onSubmit, validate } = TopicFormController({
    onClose,
    isUpdating,
  });

  return (
    <>
      {children({ onClick: onOpen })}

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
                  <FormControl isRequired isInvalid={!!props.errors.name}>
                    <FormLabel>Name</FormLabel>
                    <Input as={Field} placeholder="Column Name" name="name" />
                    <FormErrorMessage>{props.errors.name}</FormErrorMessage>
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
    </>
  );
};
