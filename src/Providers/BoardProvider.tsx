import { useState } from "react";

import { BoardContext } from "@/Context";

type PropsType = {
  children: React.ReactNode;
};

export const BoardProvider = ({ children }: PropsType) => {
  const [currentTopic, setCurrentTopic] = useState<string>("");

  const handleTopic = (topicId: string) => {
    setCurrentTopic(topicId);
  };

  return (
    <BoardContext.Provider value={{ currentTopic, handleTopic }}>
      {children}
    </BoardContext.Provider>
  );
};
