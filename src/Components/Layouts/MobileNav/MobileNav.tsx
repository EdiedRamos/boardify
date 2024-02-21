import {
  Box,
  Button,
  Flex,
  FlexProps,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
export const MobileNav = ({ onOpen, ...rest }: MobileProps): JSX.Element => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
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
          Boardify
        </Text>
      </Flex>
      <Box>
        <Button colorScheme="messenger">+ Add new task</Button>
      </Box>
    </Flex>
  );
};
