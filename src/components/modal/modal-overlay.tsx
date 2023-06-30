import React from "react";
import styles from "./modal.module.css";

type TPropsType = {
  onClose: Function;
};

const ModalOverlay: React.FC<TPropsType> = ({ onClose }) => {
  return <div className={styles.overlay} onClick={() => onClose(false)} />;
};

export default ModalOverlay;
