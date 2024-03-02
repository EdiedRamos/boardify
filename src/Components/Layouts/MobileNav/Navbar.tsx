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
import { TextCutter } from "@/Components/Atoms";

interface NavbarProps extends FlexProps {
  onOpen: () => void;
}

// TODO: Improve current board name searching

export const Navbar = ({ onOpen, ...rest }: NavbarProps): JSX.Element => {
  const { boards, currentBoard } = useDashboardStore();

  return (
    <Flex
      px={{ base: 4, md: 10 }}
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
        <Text
          fontSize="2xl"
          ml={{ base: 4, md: 0 }}
          fontFamily="monospace"
          fontWeight="bold"
        >
          <TextCutter maxLength={10}>
            {String(
              boards.boardList.find((board) => board.id === currentBoard)?.name
            )}
          </TextCutter>
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
