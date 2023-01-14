import React from 'react';
import styles from './modal.module.css';
import {modalPropTypes} from '../../utils/propTypes';

const ModalOverlay = ({children, setVisible, visible }) => {

  const defaultClasses = [styles.overlay]
    visible && defaultClasses.push(styles.active);


  return (
    <div className={defaultClasses.join(' ')} onClick={() => visible(false)} >
      {children}
    </div>
  )
}

// ModalOverlay.propTypes = {



// }

  export default ModalOverlay
