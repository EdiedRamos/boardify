import type { TaskType } from "@/Types";

import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { ConfirmationDialog, UpdateTask } from "@/Components/Molecules";

type PropsType = {
  task: TaskType;
  onDelete: (task: TaskType) => void;
};

export const TaskOptions = ({ task, onDelete }: PropsType) => {
  return (
    <Menu size={"md"}>
      <MenuButton aria-label="task options">
        <BsThreeDots />
      </MenuButton>
      <MenuList>
        <UpdateTask>
          {(props) => (
            <MenuItem
              onClick={() => props.onClick(task)}
              icon={<MdEdit fontSize={15} />}
            >
              Edit
            </MenuItem>
          )}
        </UpdateTask>
        <ConfirmationDialog
          header="Delete Task"
          onAccept={() => onDelete(task)}
        >
          {(props) => (
            <MenuItem
              onClick={props.onClick}
              icon={<MdDeleteOutline fontSize={15} />}
            >
              Delete
            </MenuItem>
          )}
        </ConfirmationDialog>
      </MenuList>
    </Menu>
  );
};
