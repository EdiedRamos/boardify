import {
  Box,
  BoxProps,
  Center,
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
import { User } from "@/Components/Organisms";
import { ColorModeToggle } from "@/Components/Atoms";
import { useEffect } from "react";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({
  onClose,
  ...rest
}: SidebarProps): JSX.Element => {
  const { boards, setBoards, setCurrentBoard, currentBoard } =
    useDashboardStore();

  useEffect(() => {
    setBoards();
  }, [setBoards]);

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      overflowY="auto"
      overflowX="hidden"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Boardify
        </Text>
        <Flex gap="20px">
          <User />
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
      </Flex>
      <Stack h={"70%"} overflowY={"auto"}>
        {boards.map((link) => (
          <NavItem
            key={link.id}
            bg={currentBoard === link.id ? "purple.400" : undefined}
            icon={TbLayoutDashboard}
            onClick={() => {
              setCurrentBoard(link.id);
              onClose();
            }}
          >
            {link.name}
          </NavItem>
        ))}
      </Stack>
      <Stack>
        <AddBoard onFinish={() => onClose()} />
      </Stack>
      <Center mt={3}>
        <ColorModeToggle />
      </Center>
    </Box>
  );
};
