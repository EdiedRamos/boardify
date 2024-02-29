import { MdDelete } from "react-icons/md";

import { ConfirmationDialog, NavItem } from "..";
import { useDashboardStore } from "@/Store";

export const DeleteBoard = () => {
  const { deleteBoard } = useDashboardStore();
  return (
    <ConfirmationDialog
      header="Delete board"
      body="Are you sure you want to delete?"
      cancelText="Cancel"
      acceptText="Delete"
      onAccept={deleteBoard}
    >
      {(props) => (
        <NavItem
          icon={MdDelete}
          bg="red.400"
          mx={0}
          p={2}
          w={150}
          onClick={props.onClick}
        >
          Delete board
        </NavItem>
      )}
    </ConfirmationDialog>
  );
};