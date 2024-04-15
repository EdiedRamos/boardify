import { TopicForm } from "@/Components/Organisms";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

export const TopicOptions = () => {
  return (
    <Menu size={"md"}>
      <MenuButton aria-label="column options">
        <BsThreeDots />
      </MenuButton>
      <MenuList>
        <TopicForm>
          {({ onClick }) => (
            <MenuItem onClick={onClick} icon={<MdEdit fontSize={15} />}>
              Edit
            </MenuItem>
          )}
        </TopicForm>
        <MenuItem icon={<MdDeleteOutline fontSize={15} />}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};
