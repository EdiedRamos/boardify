import { HiddenBlock } from "@/Components/Atoms";
import { SessionMiddleware } from "@/Components/Atoms";
import { NavItem } from "@/Components/Molecules";
import { BoardForm } from "@/Components/Organisms";
import { IoIosCreate } from "react-icons/io";

type PropsType = {
  onFinish?: () => void;
};

export const AddBoard = ({ onFinish }: PropsType) => {
  return (
    <SessionMiddleware fallback={<HiddenBlock />}>
      <BoardForm isCreating onFinish={onFinish}>
        {(props) => (
          <NavItem icon={IoIosCreate} onClick={props.onClick}>
            + Create Board
          </NavItem>
        )}
      </BoardForm>
    </SessionMiddleware>
  );
};
