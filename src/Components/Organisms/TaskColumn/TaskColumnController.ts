import type { TaskType, TopicType } from "@/Types";

import { useEffect, useRef, useState } from "react";

import { useIntersectionObserver } from "@/Core/Hooks";
import { useBoard } from "@/Core/Hooks/useBoard";
import { TaskService } from "@/Services";

export const TaskColumnController = (props: TopicType) => {
  const board = useBoard();

  const [tasks, setTasks] = useState<Array<TaskType>>([]);
  const [ref, sentry] = useIntersectionObserver({ threshold: 0 });
  const wasWatched = useRef(false);

  const handleDelete = (task: TaskType) => {
    TaskService.deleteTask(task.id).then((status) => {
      if (status) {
        setTasks((prev) => prev.filter((curTask) => curTask.id !== task.id));
      }
    });
  };

  useEffect(() => {
    if (!board?.newTask || board.currentTopic?.id !== props.id) return;
    const { newTask } = board;
    setTasks((prev) => [...prev, newTask]);
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

  return { tasks, ref, handleDelete };
};
