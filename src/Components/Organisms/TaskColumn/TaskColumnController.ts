import type { TaskPreviewType, TopicType } from "@/Types";

import { useIntersectionObserver } from "@/Core/Hooks";
import { useEffect, useRef } from "react";

export type TaskColumnType = TopicType & {
  index: number;
};

export const TaskColumnController = (props: TaskColumnType) => {
  const tasks: TaskPreviewType[] = [];
  const [ref, sentry] = useIntersectionObserver({ threshold: 0 });
  const wasWatched = useRef(false);
  useEffect(() => {
    if (sentry?.isIntersecting && !wasWatched.current) {
      // console.log(`${props.name} IM HERE`);
      console.log(`MAKING REQUEST: ${props.name}`);
      wasWatched.current = true;
    }
    // eslint-disable-next-line
  }, [sentry]);

  return { tasks, ref, sentry };
};
