import { useEffect } from "react";

import { Dashboard } from "@/Pages";

import { useDashboardStore } from "./Store";

import { DashboardMock } from "@/General/Data";

import axios from "axios";

const useInitialConfig = () => {
  const { setBoards, setCurrentBoard } = useDashboardStore();

  useEffect(() => {
    setBoards(DashboardMock);
    setCurrentBoard(DashboardMock.boardList[0].id);
  }, []);

  // * wake up backend :)
  // useEffect(() => {
  //   axios.get("https://social-network-fe9o.onrender.com");
  //   const intervalId = setInterval(() => {
  //     axios.get("https://social-network-fe9o.onrender.com");
  //   }, 1000 * 60);
  //   return () => clearInterval(intervalId);
  // }, []);
};

const App = () => {
  useInitialConfig();

  return <Dashboard />;
};

export default App;
