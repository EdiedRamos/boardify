import type { TaskPreviewType, TopicType } from "@/Types";

import { useIntersectionObserver } from "@/Core/Hooks";
import { useEffect, useRef, useState } from "react";
import { TaskService } from "@/Services";

export type TaskColumnType = TopicType & {
  index: number;
};

export const TaskColumnController = (props: TaskColumnType) => {
  const [tasks, setTasks] = useState<Array<TaskPreviewType>>([]);
  const [ref, sentry] = useIntersectionObserver({ threshold: 0 });
  const wasWatched = useRef(false);
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
