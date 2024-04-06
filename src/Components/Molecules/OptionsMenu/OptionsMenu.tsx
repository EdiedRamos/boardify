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
import { SessionMiddleware } from "@/Components/Middlewares";

export const OptionsMenu = (): JSX.Element => {
  const { currentBoard } = useDashboardStore();
  return (
    <SessionMiddleware fallback={<></>}>
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
    </SessionMiddleware>
  );
};
