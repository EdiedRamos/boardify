import {
  Button,
  ButtonProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { SignInController } from "./SignInController";
import { useToggle } from "@/Core/Hooks";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

type PropTypes = ButtonProps;

export const SignIn = ({ ...props }: PropTypes): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isActive, toggle } = useToggle();
  const { initialValues, onSubmit, validate } = SignInController();

  return (
    <>
      <Button w={"full"} onClick={onOpen} {...props}>
        SignIn
      </Button>
      <Drawer isOpen={isOpen} placement="right" size="sm" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
          >
            {(props) => (
              <Form>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">
                  SignIn to Boardify
                </DrawerHeader>
                <DrawerBody>
                  <Stack spacing="24px">
                    <FormControl isRequired isInvalid={!!props.errors.email}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        as={Field}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                      />
                      <FormErrorMessage>{props.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={!!props.errors.password}>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <InputGroup>
                        <Input
                          as={Field}
                          type={isActive ? "text" : "password"}
                          name="password"
                          id="password"
                          placeholder="Enter your password"
                          pr="4rem"
                        />
                        <InputRightElement>
                          <Button onClick={toggle}>
                            <Icon as={isActive ? FaEyeSlash : FaEye} />
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>
                        {props.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  </Stack>
                </DrawerBody>
                <DrawerFooter borderTopWidth="1px">
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" colorScheme="blue">
                    Login
                  </Button>
                </DrawerFooter>
              </Form>
            )}
          </Formik>
        </DrawerContent>
      </Drawer>
    </>
  );
};
