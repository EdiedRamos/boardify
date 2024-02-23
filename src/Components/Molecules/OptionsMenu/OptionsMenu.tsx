import {
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";

import { SlOptionsVertical } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { NavItem } from "..";

export const OptionsMenu = (): JSX.Element => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme="twitter">
          <Icon as={SlOptionsVertical} />
        </Button>
      </PopoverTrigger>
      <PopoverContent w={160}>
        <PopoverArrow />
        <PopoverBody>
          <Stack alignItems="center">
            <NavItem icon={FaRegEdit} bg="cyan.400" mx={0} p={2} w={150}>
              Edit board
            </NavItem>
            <NavItem icon={MdDelete} bg="red.400" mx={0} p={2} w={150}>
              Delete board
            </NavItem>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
