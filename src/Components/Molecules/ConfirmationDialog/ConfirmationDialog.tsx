import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

import type { ModalProps } from "@chakra-ui/react";

type Composed = JSX.Element | string;

type PropsType = {
  header: Composed;
  body: Composed;
  cancelText: string;
  acceptText: string;
  onCancel?: () => void;
  onAccept: () => void;
  children: (props: { onClick: () => void }) => JSX.Element;
};

export const ConfirmationDialog = ({
  header,
  body,
  cancelText,
  acceptText,
  onCancel,
  onAccept,
  children,
}: PropsType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef: NonNullable<ModalProps["initialFocusRef"]> = useRef(null);

  const handleCancel = () => {
    onClose();
    onCancel && onCancel();
  };
  const handleAccept = () => {
    onClose();
    onAccept();
  };

  return (
    <>
      {children({ onClick: onOpen })}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {header}
            </AlertDialogHeader>

            <AlertDialogBody>{body}</AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={handleCancel}>{cancelText}</Button>
              <Button colorScheme="red" onClick={handleAccept} ml={3}>
                {acceptText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
