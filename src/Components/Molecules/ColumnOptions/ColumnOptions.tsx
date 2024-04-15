import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

export const ColumnOptions = () => {
  return (
    <Menu size={"md"} isLazy>
      <MenuButton aria-label="column options">
        <BsThreeDots />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<MdEdit fontSize={15} />}>Edit</MenuItem>
        <MenuItem icon={<MdDeleteOutline fontSize={15} />}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};
