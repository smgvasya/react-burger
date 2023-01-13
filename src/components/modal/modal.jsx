import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";

 const Modal = ({ children, OnClose, setVisible }) => {

  const modalRoot = document.getElementById('react-modals');



  return  ReactDOM.createPortal(
    <ModalOverlay onClick={OnClose} >
        <div className={styles.content}>
          <div className={styles.closeButton} onClick={OnClose} >
            <CloseIcon type="primary" />
          </div>
          {children}
        </div>
    </ModalOverlay>,
    modalRoot
  )
}

// Modal.propTypes = {
//   close: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired
// };

export default Modal

