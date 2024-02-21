import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { IconType } from "react-icons";
import { TbLayoutDashboard } from "react-icons/tb";

import { NavItem } from "@/Components/Molecules";

interface BoardListProps {
  name: string;
  icon: IconType;
}
const BoardList: Array<BoardListProps> = [
  { name: "Roadmap", icon: TbLayoutDashboard },
  { name: "Marketing Plan", icon: TbLayoutDashboard },
  { name: "+ Create new board", icon: TbLayoutDashboard },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({
  onClose,
  ...rest
}: SidebarProps): JSX.Element => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Boardify
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {BoardList.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
