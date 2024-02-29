import { NavItem } from "@/Components/Molecules";
import { BoardForm } from "@/Components/Organisms";
import { TbLayoutDashboard } from "react-icons/tb";

export const AddBoard = () => {
  return (
    <BoardForm isCreating>
      {(props) => (
        <NavItem icon={TbLayoutDashboard} onClick={props.onClick}>
          + Create new board
        </NavItem>
      )}
    </BoardForm>
  );
};
