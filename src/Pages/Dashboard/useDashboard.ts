import { useEffect } from "react";

import { useDisclosure } from "@chakra-ui/react";
import { useResponsive } from "@/Core/Hooks";

export const useDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isMobile } = useResponsive();

  useEffect(() => {
    if (!isMobile) {
      onClose();
    }
  }, [isMobile, onClose]);

  return {
    isOpen,
    onOpen,
    onClose,
    isMobile,
  };
};
