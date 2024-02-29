import { BoardForm } from "@/Components/Organisms";
import { NavItem } from "@/Components/Molecules";
import { FaRegEdit } from "react-icons/fa";

export const UpdateBoard = () => {
  return (
    <BoardForm isCreating={false}>
      {(props) => (
        <NavItem
          icon={FaRegEdit}
          bg="cyan.400"
          mx={0}
          p={2}
          w={150}
          onClick={props.onClick}
        >
          Edit board
        </NavItem>
      )}
    </BoardForm>
  );
};
