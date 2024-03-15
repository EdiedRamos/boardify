import { Switch, useColorMode } from "@chakra-ui/react";

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      colorScheme="facebook"
      size="lg"
      onChange={toggleColorMode}
      isChecked={colorMode === "dark"}
    />
  );
};
