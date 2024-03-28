import { Flex, Switch, useColorMode } from "@chakra-ui/react";

import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align={"center"} gap={"8px"}>
      <MdLightMode />
      <Switch
        colorScheme="orange"
        size="lg"
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
      />
      <MdDarkMode />
    </Flex>
  );
};
