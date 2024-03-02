import { NavItem } from "@/Components/Molecules";
import { BoardForm } from "@/Components/Organisms";
import { IoIosCreate } from "react-icons/io";

export const AddBoard = () => {
  return (
    <BoardForm isCreating>
      {(props) => (
        <NavItem icon={IoIosCreate} onClick={props.onClick}>
          + Create Board
        </NavItem>
      )}
    </BoardForm>
  );
};
