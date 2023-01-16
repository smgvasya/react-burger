import { useState } from "react";
import { ingredientsPropTypes } from "../../utils/propTypes";
import PropTypes from "prop-types";

import styles from "./burger-constructor.module.css";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsConstructor from "./ingredients-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
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
      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails data={data} />
        </Modal>
      )}
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
};

export default BurgerConstructor;
