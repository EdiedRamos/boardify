import { useEffect, useRef, useState, useCallback } from "react";

interface IntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

type IntersectionObserverEntryOrNull = IntersectionObserverEntry | null;

export function useIntersectionObserver(
  options: IntersectionObserverOptions = {}
): [React.LegacyRef<HTMLDivElement>, IntersectionObserverEntryOrNull] {
  const { threshold = 1, root = null, rootMargin = "0px" } = options;
  const [entry, setEntry] = useState<IntersectionObserverEntryOrNull>(null);

  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const previousObserver = useRef<IntersectionObserver | null>(null);

  const observeIntersection = useCallback(
    (node: HTMLDivElement | null) => {
      if (previousObserver.current) {
        previousObserver.current.disconnect();
        previousObserver.current = null;
      }

      if (node) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setEntry(entry);
          },
          { threshold, root, rootMargin }
        );

        observer.observe(node);
        previousObserver.current = observer;
      }
    },
    [threshold, root, rootMargin]
  );

  useEffect(() => {
    observeIntersection(intersectionRef.current);

    return () => {
      if (previousObserver.current) {
        previousObserver.current.disconnect();
        previousObserver.current = null;
      }
    };
  }, [observeIntersection]);

  return [intersectionRef, entry];
}
