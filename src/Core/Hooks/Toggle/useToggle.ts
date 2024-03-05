import { useState } from "react";

type PropsType = {
  initialState?: boolean;
};

type ToggleType = {
  isActive: boolean;
  toggle: () => void;
};

export const useToggle = ({
  initialState = false,
}: PropsType = {}): ToggleType => {
  const [isActive, setActive] = useState<boolean>(initialState);

  const handleToggle = (): void => {
    setActive((previous) => !previous);
  };

  return {
    isActive,
    toggle: handleToggle,
  };
};
