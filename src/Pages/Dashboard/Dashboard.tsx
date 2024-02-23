import {
  Box,
  Drawer,
  useColorModeValue,
  DrawerContent,
} from "@chakra-ui/react";

import { Navbar } from "@/Components/Layouts";
import { Board, SidebarContent } from "@/Components/Organisms";
import { useDashboard } from "./useDashboard";

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
      <Navbar onOpen={onOpen} />
      {/* Content */}
      <Board />
    </Box>
  );
};
