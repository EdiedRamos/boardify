import { Dashboard } from "@/Pages";

import { useEffect } from "react";

import { useDashboardStore } from "./Store";

import { DashboardMock } from "@/General/Data";

const useInitialConfig = () => {
  const { setBoards, setCurrentBoard } = useDashboardStore();

  useEffect(() => {
    setBoards(DashboardMock);
    setCurrentBoard(DashboardMock.boardList[0].id);
  }, []);
};

const App = () => {
  useInitialConfig();

  return <Dashboard />;
};

export default App;
