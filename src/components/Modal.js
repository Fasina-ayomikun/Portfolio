import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { useAppProvider } from "../context";
import image from "../images/me2.jpeg";
function Modal() {
  const { isModalOpen, closeModal } = useAppProvider();

  return (
    <section className={isModalOpen ? "show-modal modal" : "modal"}>
      <div className='modal-container show-modal'>
        <FaTimes className='modal-icon' onClick={closeModal} />
        <img src={image} alt='my picture' />
      </div>
    </section>
  );
}

export default Modal;
