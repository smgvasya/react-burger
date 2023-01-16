import { useEffect } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import styles from "./modal.module.css";
import ModalOverlay from "./modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById("react-modals");

  useEffect(() => {
    const handleEscClose = (e) => {
      e.key === "Escape" && onClose();
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeButton} onClick={() => onClose()}>
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}.isRequired;

export default Modal;
