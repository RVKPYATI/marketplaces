"use client";
import { useState } from "react";
import { Modal } from "./Modal";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";

export const ModalWrapper = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* <ButtonPrimary onClick={openModal}>Добавить</ButtonPrimary> */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {children}
      </Modal>
    </>
  );
};
