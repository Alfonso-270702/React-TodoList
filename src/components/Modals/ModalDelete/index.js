import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ModalDeleteIcon } from "../../../static/icons";

export function ModalDelete({ isOpen, onClose, onAction, content }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay data-cy="modal-delete" />
      <ModalContent minW="490px" minH="355px" borderRadius="12px">
        <ModalBody>
          <Image
            data-cy="modal-delete-icon"
            src={ModalDeleteIcon}
            alt="modal-delete-icon"
            mt="40px"
            mb="34px"
            mx={"auto"}
            py={0}
          />
          <Text
            data-cy="modal-delete-title"
            textAlign="center"
            dangerouslySetInnerHTML={{ __html: content }}
          ></Text>
        </ModalBody>
        <ModalFooter
          display="flex"
          justifyContent="center"
          gap="20px"
          py="43px"
        >
          <Button
            data-cy="modal-delete-cancel-button"
            minW="150px"
            height="54px"
            bg="#F4F4F4"
            color="#4A4A4A"
            borderRadius="45px"
            fontSize="18px"
            fontWeight="semibold"
            px="22px"
            py="13.5px"
            onClick={onClose}
          >
            Batal
          </Button>
          <Button
            data-cy="modal-delete-confirm-button"
            minW="150px"
            height="54px"
            bg="#ED4C5C"
            color="white"
            borderRadius="45px"
            fontSize="18px"
            fontWeight="semibold"
            px="22px"
            py="13.5px"
            onClick={onAction}
          >
            Hapus
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
