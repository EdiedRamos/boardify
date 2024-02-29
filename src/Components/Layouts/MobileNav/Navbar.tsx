import { OptionsMenu } from "@/Components/Molecules";
import {
  Box,
  Flex,
  FlexProps,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

// just trying Zustand
import { useDashboardStore } from "@/Store";
import { AddTask } from "@/Components/Organisms";

interface NavbarProps extends FlexProps {
  onOpen: () => void;
}

// TODO: Improve current board name searching

export const Navbar = ({ onOpen, ...rest }: NavbarProps): JSX.Element => {
  const { boards, currentBoard } = useDashboardStore();

  return (
    <Flex
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
      {...rest}
    >
      <Flex alignItems="center">
        <IconButton
          display={{ base: "flex", md: "none" }}
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
          {boards.boardList.find((board) => board.id === currentBoard)?.name}
        </Text>
      </Flex>
      <Flex gap={1}>
        <Box>
          <AddTask />
        </Box>
        <Box>
          <OptionsMenu />
        </Box>
      </Flex>
    </Flex>
  );
};
