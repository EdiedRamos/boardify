import type { TaskPreviewType, TopicType } from "@/Types";

import { useIntersectionObserver } from "@/Core/Hooks";
import { useEffect, useRef, useState } from "react";
import { TaskService } from "@/Services";
import { useBoard } from "@/Core/Hooks/useBoard";

export type TaskColumnType = TopicType & {
  index: number;
};

export const TaskColumnController = (props: TaskColumnType) => {
  const board = useBoard();

  const [tasks, setTasks] = useState<Array<TaskPreviewType>>([]);
  const [ref, sentry] = useIntersectionObserver({ threshold: 0 });
  const wasWatched = useRef(false);

  useEffect(() => {
    if (!board?.newTask || board.currentTopic?.id !== props.id) return;
    const { newTask } = board;
    const newTaskPreview: TaskPreviewType = {
      id: newTask.id,
      name: newTask.name,
      description: newTask.description,
    };
    setTasks((prev) => [...prev, newTaskPreview]);
    board.taskReceiver();
    // eslint-disable-next-line
  }, [board?.newTask]);

  useEffect(() => {
    if (sentry?.isIntersecting && !wasWatched.current) {
      TaskService.getAllTasks(props.id).then((response) => {
        setTasks(response);
      });
      wasWatched.current = true;
    }
    // eslint-disable-next-line
  }, [sentry]);

  return { tasks, ref, sentry };
};
