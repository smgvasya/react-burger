import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

 const Modal = ({ children, visible }) => {

  const modalRoot = document.getElementById('react-modals');

  useEffect(() => {
    const handleEscClose = (e) => {e.key === "Escape" && visible(false)};

    document.addEventListener('keydown', handleEscClose);

      return () => {
        document.removeEventListener('keydown', handleEscClose)
      };

  }, [visible]);

  return  ReactDOM.createPortal(
    <ModalOverlay  visible = {visible} >
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.closeButton} onClick={() => visible(false)} >
            <CloseIcon type="primary" />
          </div>
          {children}
        </div>
    </ModalOverlay>,
    modalRoot
  )
}

export default Modal

