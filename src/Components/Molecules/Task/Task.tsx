import type { TaskType } from "@/Types";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

type ChildrenProps = {
  onClick: () => void;
};

type PropsType = {
  children: (props: ChildrenProps) => JSX.Element;
  task?: TaskType;
};

export const Task = ({ children, task }: PropsType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children({ onClick: onOpen })}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quia, corrupti distinctio labore nulla unde totam
              error amet nesciunt omnis sunt commodi ullam dolore impedit nihil
              voluptas in enim provident.
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
