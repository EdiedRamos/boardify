import { SignIn, SignUp } from "@/Components/Molecules";
import { EntryDecoded } from "@/Services";
import { useDashboardStore } from "@/Store";
import { useSessionStore } from "@/Store/Session/session.store";
import { Menu, MenuButton, Avatar, MenuList, MenuItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const UserMenu = (): JSX.Element => {
  const { isLogged, logout } = useSessionStore();
  const { clearDashboard } = useDashboardStore();
  const [username, setUsername] = useState<string>("");

  const handleLogout = () => {
    logout();
    clearDashboard();
  };

  useEffect(() => {
    setUsername(EntryDecoded.SESSION.getSub());
  }, [isLogged]);

  return (
    <Menu>
      <MenuButton>
        <Avatar _hover={{ bg: "gray.600" }} size="sm" name={username} src="" />
      </MenuButton>
      <MenuList w={160} textAlign={"center"}>
        {isLogged ? (
          <>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
