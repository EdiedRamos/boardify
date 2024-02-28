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

import { ConfirmationDialog, NavItem } from "..";
import { useDashboardStore } from "@/Store";

export const OptionsMenu = (): JSX.Element => {
  const { deleteBoard } = useDashboardStore();

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
            <NavItem
              icon={FaRegEdit}
              bg="cyan.400"
              mx={0}
              p={2}
              w={150}
              onClick={() => {}}
            >
              Edit board
            </NavItem>

            <ConfirmationDialog
              header="Delete board"
              body="Are you sure you want to delete?"
              cancelText="Cancel"
              acceptText="Delete"
              onAccept={deleteBoard}
            >
              {(props) => (
                <NavItem
                  icon={MdDelete}
                  bg="red.400"
                  mx={0}
                  p={2}
                  w={150}
                  onClick={props.onClick}
                >
                  Delete board
                </NavItem>
              )}
            </ConfirmationDialog>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
