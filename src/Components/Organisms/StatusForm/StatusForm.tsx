import {
  Button,
  Card,
  CardHeader,
  Center,
  Heading,
  Stack,
} from "@chakra-ui/react";

export const StatusForm = () => {
  return (
    <Stack>
      <Card variant="elevated" w="sm" h="full">
        <Center h="inherit">
          <CardHeader>
            <Button>
              <Heading size="sm">+ New Column</Heading>
            </Button>
          </CardHeader>
        </Center>
      </Card>
    </Stack>
  );
};
