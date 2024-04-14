import {
  Box,
  Drawer,
  useColorModeValue,
  DrawerContent,
} from "@chakra-ui/react";

import { Navbar } from "@/Components/Layouts";
import { Board, Landing, SidebarContent } from "@/Components/Organisms";
import { useDashboard } from "./useDashboard";
import { SessionMiddleware } from "@/Components/Atoms";

export const Dashboard = (): JSX.Element => {
  const { isOpen, onOpen, onClose, isMobile } = useDashboard();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isMobile ? isOpen : false}
        onClose={onClose}
        placement="left"
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }}>
        <Navbar onOpen={onOpen} />
        <SessionMiddleware fallback={<Landing />}>
          <Board />
        </SessionMiddleware>
      </Box>
    </Box>
  );
};
