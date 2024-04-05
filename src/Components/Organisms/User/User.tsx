import { SignIn, SignUp } from "@/Components/Molecules";
import { useSessionStore } from "@/Store/Session/session.store";
import { Menu, MenuButton, Avatar, MenuList, MenuItem } from "@chakra-ui/react";

export const User = (): JSX.Element => {
  const { isLogged, logout } = useSessionStore();

  return (
    <Menu>
      <MenuButton>
        <Avatar
          _hover={{ bg: "gray.600" }}
          size="sm"
          name={isLogged ? "Antonio" : ""}
          src=""
        />
      </MenuButton>
      <MenuList w={160} textAlign={"center"}>
        {isLogged ? (
          <>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </>
        ) : (
          <>
            <SignIn as={MenuItem} mb={2} w={"90%"} mx={"auto"} />
            <SignUp as={MenuItem} w={"90%"} mx={"auto"} />
          </>
        )}
      </MenuList>
    </Menu>
  );
};
