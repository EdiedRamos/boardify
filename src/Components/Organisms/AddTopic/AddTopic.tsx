import { useRef } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Card,
  CardHeader,
  Center,
  Stack,
} from "@chakra-ui/react";

import { Field, Form, Formik } from "formik";
import { AddTopicController } from "./AddTopicController";

export const AddTopic = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { initialValues, onSubmit, validate } = AddTopicController({
    onClose,
  });

  const initialRef = useRef(null);

  return (
    <>
      <Stack>
        <Card variant="elevated" w="sm" h="full">
          <Center h="inherit">
            <CardHeader>
              <Button onClick={onOpen}>
                <Heading size="sm">+ New Column</Heading>
              </Button>
            </CardHeader>
          </Center>
        </Card>
      </Stack>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Column</ModalHeader>
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
                      placeholder="Column Name"
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
