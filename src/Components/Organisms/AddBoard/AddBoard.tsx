import { useRef } from "react";
import { NavItem } from "@/Components/Molecules";
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
import { TbLayoutDashboard } from "react-icons/tb";

import { Field, Form, Formik } from "formik";
import { AddBoardController } from "./AddBoardController";

export const AddBoard = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { initialValues, onSubmit, validate } = AddBoardController({ onClose });

  const initialRef = useRef(null);

  return (
    <>
      <NavItem icon={TbLayoutDashboard} onClick={onOpen}>
        + Create new board
      </NavItem>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new board</ModalHeader>
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
                    <Input
                      as={Field}
                      ref={initialRef}
                      placeholder="Board name"
                      name="name"
                    />
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
