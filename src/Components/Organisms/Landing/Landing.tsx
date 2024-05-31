import { Box, Center, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { SignIn, SignUp } from "@/Components/Molecules";

export const Landing = () => {
  return (
    <Center minH={"100vh"}>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Enhance Your Productivity <br />
            <Text as={"span"} color={"gray.500"}>
              with Boardify
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Make your work flow effortlessly with Boardify. Organize your tasks
            visually, collaborate effectively with your team, and achieve your
            goals with ease. Simplify your day-to-day and take your productivity
            to the next level with our intuitive and powerful platform!
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
          >
            <SignIn
              text="Get Started"
              colorScheme={"blue"}
              rounded={"full"}
              px={6}
            />
            <SignUp
              text="Not member yet?"
              variant={"link"}
              colorScheme={"blue"}
              size={"sm"}
            />
          </Stack>
        </Stack>
      </Container>
    </Center>
  );
};
