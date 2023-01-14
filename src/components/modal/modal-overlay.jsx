import React from 'react';
import styles from './modal.module.css';
import {modalPropTypes} from '../../utils/propTypes';

const ModalOverlay = ({children, visible }) => {

  const rootClasses = [styles.overlay]
    visible && rootClasses.push(styles.active);


  return (
    <div className={rootClasses.join(' ')} onClick={() => visible(false)} >
      {children}
    </div>
  )
}

ModalOverlay.propTypes = {
  props: modalPropTypes,
}

export default ModalOverlay
