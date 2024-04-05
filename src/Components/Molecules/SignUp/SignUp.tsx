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
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useToggle } from "@/Core/Hooks";
import { SignUpController } from "./SignUpController";

type PropTypes = ButtonProps;

export const SignUp = ({ ...props }: PropTypes): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isActive, toggle } = useToggle();

  const { initialValues, onSubmit, validate } = SignUpController();

  return (
    <>
      <Button w="full" onClick={onOpen} {...props}>
        SignUp
      </Button>
      <Drawer isOpen={isOpen} placement="right" size="sm" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new account
          </DrawerHeader>
          <Formik {...{ initialValues, validate, onSubmit }}>
            {({ errors }) => (
              <Form>
                <DrawerBody>
                  <Stack spacing="24px">
                    {/* name */}
                    <FormControl isRequired isInvalid={!!errors.name}>
                      <FormLabel>Name</FormLabel>
                      <Input
                        as={Field}
                        name="name"
                        placeholder="Enter your name"
                      />
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </FormControl>
                    {/* email */}
                    <FormControl isRequired isInvalid={!!errors.email}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        as={Field}
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    {/* password */}
                    <FormControl isRequired isInvalid={!!errors.password}>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          as={Field}
                          type={isActive ? "text" : "password"}
                          name="password"
                          placeholder="Enter your password"
                        />
                        <InputRightElement>
                          <Button onClick={toggle}>
                            <Icon as={isActive ? FaEyeSlash : FaEye} />
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                  </Stack>
                </DrawerBody>
                <DrawerFooter borderTopWidth="1px">
                  <Button type="submit" colorScheme="blue" mr={3}>
                    Create
                  </Button>
                  <Button variant="outline" onClick={onClose}>
                    Cancel
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
