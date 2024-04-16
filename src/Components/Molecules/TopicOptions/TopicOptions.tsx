import type { TopicType } from "@/Types";

import { TopicForm } from "@/Components/Organisms";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { useBoard } from "@/Core/Hooks/useBoard";

type PropsType = {
  topic: TopicType;
};

export const TopicOptions = ({ topic }: PropsType) => {
  const board = useBoard();

  return (
    <Menu size={"md"}>
      <MenuButton aria-label="column options">
        <BsThreeDots />
      </MenuButton>
      <MenuList>
        <TopicForm isUpdating>
          {({ onClick }) => (
            <MenuItem
              onClick={() => {
                board?.handleTopic(topic);
                onClick();
              }}
              icon={<MdEdit fontSize={15} />}
            >
              Edit
            </MenuItem>
          )}
        </TopicForm>
        <MenuItem icon={<MdDeleteOutline fontSize={15} />}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};
