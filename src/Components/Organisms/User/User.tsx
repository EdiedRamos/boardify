import { SignIn, SignUp } from "@/Components/Molecules";
import { Menu, MenuButton, Avatar, MenuList, MenuItem } from "@chakra-ui/react";

export const User = (): JSX.Element => {
  return (
    <Menu>
      <MenuButton>
        <Avatar _hover={{ bg: "gray.600" }} size="sm" name="" src="" />
      </MenuButton>
      <MenuList w={160} textAlign={"center"}>
        <SignIn as={MenuItem} mb={2} w={"90%"} mx={"auto"} />
        <SignUp as={MenuItem} w={"90%"} mx={"auto"} />
      </MenuList>
    </Menu>
  );
};
