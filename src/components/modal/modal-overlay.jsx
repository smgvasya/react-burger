import styles from "./modal.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ children, onClose }) => {
  return (
    <div className={styles.overlay} onClick={() => onClose(false)}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}.isRequired;

export default ModalOverlay;
