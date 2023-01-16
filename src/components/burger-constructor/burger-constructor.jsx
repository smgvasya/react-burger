import { useState } from "react";

import styles from "./burger-constructor.module.css";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsConstructor from "./ingredients-constructor";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = ({ data }) => {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <section className={`${styles.section} mt-25 `}>
      <div className="pl-4 mb-10 ">
        <IngredientsConstructor data={data} />
      </div>
      <div className={`${styles.order} mr-4`}>
        <div className={`${styles.price} mr-10`}>
          <span className="text text_type_digits-medium">{`16 535`}</span>
          <div className={styles.icon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          type="primary"
          size="large"
          htmlType="button"
          onClick={handleOpenModal}
        >
          Оформить заказ
        </Button>
      </div>
      {modal && (
        <Modal visible={handleCloseModal}>
          <OrderDetails data={data} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
