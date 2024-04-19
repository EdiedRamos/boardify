import type { TaskType, TopicType } from "@/Types";

import { useEffect, useRef } from "react";

import { useIntersectionObserver } from "@/Core/Hooks";
import { useBoard } from "@/Core/Hooks/useBoard";
import { TaskService } from "@/Services";
import { useTask } from "@/Core/Hooks/useTask";

export const TaskColumnController = (props: TopicType) => {
  const board = useBoard();
  const taskState = useTask();

  const [ref, sentry] = useIntersectionObserver({ threshold: 0 });
  const wasWatched = useRef(false);

  const handleDelete = (task: TaskType) => {
    if (!taskState) return;
    TaskService.deleteTask(task.id).then((status) => {
      if (status) {
        taskState.setTasks((prev) =>
          prev.filter((curTask) => curTask.id !== task.id)
        );
      }
    });
  };

  useEffect(() => {
    if (!taskState) return;
    if (!board?.newTask || board.currentTopic?.id !== props.id) return;
    const { newTask } = board;
    taskState.setTasks((prev) => [...prev, newTask]);
    board.taskReceiver();
    // eslint-disable-next-line
  }, [board?.newTask]);

  useEffect(() => {
    if (!taskState) return;
    if (sentry?.isIntersecting && !wasWatched.current) {
      TaskService.getAllTasks(props.id).then((response) => {
        taskState.setTasks(response);
      });
      wasWatched.current = true;
    }
    // eslint-disable-next-line
  }, [sentry]);

  return { tasks: taskState?.tasks ?? [], ref, handleDelete };
};
