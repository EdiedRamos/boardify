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
import { BoardFormController } from "./BoardFormController";

type PropsType = {
  isCreating: boolean;
  children: (props: { onClick: () => void }) => JSX.Element;
};

export const BoardForm = ({ children, isCreating }: PropsType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { initialValues, onSubmit, validate } = BoardFormController({
    onClose,
    isCreating,
  });

  return (
    <>
      {children({ onClick: onOpen })}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isCreating ? "Create a New Board" : "Update The Board"}
          </ModalHeader>
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
                    <Input as={Field} placeholder="Board name" name="name" />
                    <FormErrorMessage>{props.errors.name}</FormErrorMessage>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button type="submit" colorScheme="blue" mr={3}>
                    {isCreating ? "Create" : "Update"}
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
