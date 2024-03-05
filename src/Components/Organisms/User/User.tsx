import {
  Avatar,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";

export const User = (): JSX.Element => {
  return (
    <Popover>
      <PopoverTrigger>
        <button>
          <Avatar _hover={{ bg: "gray.600" }} size="sm" name="" src="" />
        </button>
      </PopoverTrigger>
      <PopoverContent w={160}>
        <PopoverArrow />
        <PopoverBody>
          <Stack alignItems="center">
            <Button w="full">Login</Button>
            <Button w="full">SignUp</Button>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
