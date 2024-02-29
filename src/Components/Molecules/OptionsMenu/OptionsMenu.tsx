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

import { DeleteBoard, UpdateBoard } from "..";
import { useDashboardStore } from "@/Store";

export const OptionsMenu = (): JSX.Element => {
  const { currentBoard } = useDashboardStore();
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          colorScheme="twitter"
          isDisabled={currentBoard === null || currentBoard === undefined}
        >
          <Icon as={SlOptionsVertical} />
        </Button>
      </PopoverTrigger>
      <PopoverContent w={160}>
        <PopoverArrow />
        <PopoverBody>
          <Stack alignItems="center">
            <UpdateBoard />
            <DeleteBoard />
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
