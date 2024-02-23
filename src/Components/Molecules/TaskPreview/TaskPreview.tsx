import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

type TaskPreviewProps = {
  title: string;
  text: string;
};

export const TaskPreview = ({ title, text }: TaskPreviewProps): JSX.Element => {
  return (
    <Card variant="elevated" w="sm">
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{text}</Text>
      </CardBody>
    </Card>
  );
};
