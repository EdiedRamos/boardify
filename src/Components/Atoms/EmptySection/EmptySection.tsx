import { Box, Center, Image } from "@chakra-ui/react";
import { EmptyBoardImg } from "@/General/Images";

export const EmptySection = () => {
  return (
    <Center mt={10}>
      <Box rounded={10} backgroundColor="purple.400">
        <Image
          rounded={10}
          mixBlendMode="multiply"
          w={500}
          src={EmptyBoardImg}
        />
      </Box>
    </Center>
  );
};
