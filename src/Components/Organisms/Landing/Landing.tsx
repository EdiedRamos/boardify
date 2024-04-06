import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { Arrow } from "@/Components/Atoms";
import { SignIn, SignUp } from "@/Components/Molecules";

export const Landing = () => {
  return (
    <>
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
            <Text as={"span"} color={"pink.400"}>
              with Boardify
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Make your work flow effortlessly with KanbanFlow. Organize your
            tasks visually, collaborate effectively with your team, and achieve
            your goals with ease. Simplify your day-to-day and take your
            productivity to the next level with our intuitive and powerful
            platform!
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <SignIn
              text="Get Started"
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            />
            <SignUp
              text="Not member yet?"
              variant={"link"}
              colorScheme={"blue"}
              size={"sm"}
            />
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue("yellow.500", "yellow.300")}
                w={71}
                position={"absolute"}
                right={-71}
                top={"10px"}
              />
              <Text
                fontSize={"lg"}
                fontFamily={"Caveat"}
                position={"absolute"}
                right={"-125px"}
                top={"-15px"}
                transform={"rotate(10deg)"}
              >
                Starting at $1/mo
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
