import React from 'react';
import styles from './modal.module.css';
import {modalPropTypes} from '../../utils/propTypes';

const ModalOverlay = ({children}) => {

  return (
    <div className={styles.overlay}>
      {children}
    </div>
  )

}

ModalOverlay.propTypes = {



}

  export default ModalOverlay
