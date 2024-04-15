import {
  Button,
  Card,
  CardHeader,
  Center,
  Heading,
  Stack,
} from "@chakra-ui/react";

import { TopicForm } from "@/Components/Organisms";

export const AddTopic = (): JSX.Element => {
  return (
    <TopicForm>
      {(props) => (
        <Stack>
          <Card variant="elevated" w="sm" h="full">
            <Center h="inherit">
              <CardHeader>
                <Button onClick={props.onClick}>
                  <Heading size="sm">+ New Column</Heading>
                </Button>
              </CardHeader>
            </Center>
          </Card>
        </Stack>
      )}
    </TopicForm>
  );
};
