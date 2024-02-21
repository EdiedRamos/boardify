import { useLayoutEffect, useState } from "react";

export const useResponsive = () => {
  const [width, setWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return { width, isMobile: width < 768 };
};
