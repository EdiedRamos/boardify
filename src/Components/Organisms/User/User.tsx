import { SignIn, SignUp } from "@/Components/Molecules";
import { Menu, MenuButton, Avatar, MenuList, MenuItem } from "@chakra-ui/react";

export const User = (): JSX.Element => {
  return (
    <Menu>
      <MenuButton>
        <Avatar _hover={{ bg: "gray.600" }} size="sm" name="" src="" />
      </MenuButton>
      <MenuList w={160}>
        <MenuItem>
          <SignIn />
        </MenuItem>
        <MenuItem>
          <SignUp />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
