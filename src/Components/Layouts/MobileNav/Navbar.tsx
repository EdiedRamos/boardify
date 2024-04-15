import { OptionsMenu } from "@/Components/Molecules";
import {
  Box,
  Center,
  Flex,
  FlexProps,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import { useDashboardStore } from "@/Store";

interface NavbarProps extends FlexProps {
  onOpen: () => void;
}

export const Navbar = ({ onOpen, ...rest }: NavbarProps): JSX.Element => {
  const { currentBoard } = useDashboardStore();

  return (
    <Flex
      px={{ base: 4, md: 5 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
      {...rest}
    >
      <Flex alignItems="center" height="inherit">
        <IconButton
          display={{ base: "flex", md: "none" }}
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Center display={{ base: "none", md: "flex" }}>
          <Text
            fontSize="2xl"
            mx={{ base: 4, md: 0 }}
            fontFamily="monospace"
            fontWeight="bold"
            height="inherit"
            maxW={{ md: "40vw" }}
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
            verticalAlign="middle"
          >
            {currentBoard?.name}
          </Text>
        </Center>
      </Flex>
      <Flex gap={1}>
        <Box>
          <OptionsMenu />
        </Box>
      </Flex>
    </Flex>
  );
};
