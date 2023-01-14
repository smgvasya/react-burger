import styles from './modal.module.css';
import {modalPropTypes} from '../../utils/propTypes';

const ModalOverlay = ({children, visible }) => {

  return (
    <div className={styles.overlay} onClick={() => visible(false)} >
      {children}
    </div>
  )
}

ModalOverlay.propTypes = {
  props: modalPropTypes,
}

export default ModalOverlay
