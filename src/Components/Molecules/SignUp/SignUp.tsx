import {
  Box,
  Button,
  ButtonProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

type PropTypes = ButtonProps;

export const SignUp = ({ ...props }: PropTypes): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input id="username" placeholder="Enter your name" />
              </Box>
              <Box>
                <FormLabel htmlFor="email">Email</FormLabel>
                <InputGroup>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </InputGroup>
              </Box>
              <Box>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input id="password" placeholder="Enter your password" />
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button colorScheme="blue" mr={3}>
              Create
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
