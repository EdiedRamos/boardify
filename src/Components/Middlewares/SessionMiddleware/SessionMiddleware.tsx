import type { ReactNode } from "react";

import { useSessionStore } from "@/Store";

type PropsType = {
  children: ReactNode;
  fallback: JSX.Element;
};

export const SessionMiddleware = ({ children, fallback }: PropsType) => {
  const { isLogged } = useSessionStore();

  if (!isLogged) return fallback;

  return children;
};
