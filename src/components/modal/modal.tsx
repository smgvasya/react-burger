import React from "react";
import { useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import styles from "./modal.module.css";
import ModalOverlay from "./modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export type TPropsType = {
  children: ReactNode;
  onClose: () => void;
};

const Modal: React.FC<TPropsType> = ({ children, onClose }) => {
  const modalRoot = document.getElementById("react-modals") as HTMLElement;

  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => {
      e.key === "Escape" && onClose();
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <section className={styles.modal}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeButton} onClick={onClose}>
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />,
    </section>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
