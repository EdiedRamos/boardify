import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { TbLayoutDashboard } from "react-icons/tb";

import { NavItem } from "@/Components/Molecules";

import { useDashboardStore } from "@/Store";
import { AddBoard } from "@/Components/Molecules";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({
  onClose,
  ...rest
}: SidebarProps): JSX.Element => {
  const { boards, setCurrentBoard, currentBoard } = useDashboardStore();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      overflow="auto"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Boardify
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Stack>
        {boards.boardList.map((link) => (
          <NavItem
            bg={currentBoard === link.id ? "purple.400" : undefined}
            key={link.name}
            icon={TbLayoutDashboard}
            onClick={() => setCurrentBoard(link.id)}
          >
            {link.name}
          </NavItem>
        ))}
        <AddBoard />
      </Stack>
    </Box>
  );
};
