import { Box, Flex, FlexProps, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  hoverBg?: string;
  children: string | number;
  onClick: () => void;
}
export const NavItem = ({
  icon,
  children,
  hoverBg,
  onClick,
  ...rest
}: NavItemProps): JSX.Element => {
  return (
    <Box
      as="button"
      textDecoration={"none"}
      _focus={{ boxShadow: "none" }}
      onClick={onClick}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        _hover={{
          bg: hoverBg || "teal.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};
