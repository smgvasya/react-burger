import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../utils/api";
import styles from "./burger-constructor.module.css";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsConstructor from "./ingredients-constructor";
// import Modal from "../modal/modal";
// import OrderDetails from "../order-details/order-details";

const BurgerConstructor = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [orderNumber, setOrderNumber] = useState(0);

  const dispatch = useDispatch();
  const bun = useSelector((state) => state.constructor.bun);
  const filling  = useSelector((state) => state.constructor.filling);
  const ingredients = useSelector((state) => state.ingredients.data);

  // const handleOpenModal = () => {
  //   setIsOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsOpen(false);
  // };

  // const handleMakeOrder = () => {
  //   const arrayId = ingredients.map((item) => item._id.toString());
  //   handleOpenModal();
  //   postOrder(arrayId)
  //     .then((res) => {
  //       setOrderNumber(res.order.number);
  //     })
  //     .catch((err) =>
  //       console.log(`При обработке заказа произошла ошибка: ${err}`)
  //     );
  // };

  // const totalPrice = useMemo(
  //   () =>
  //     constructorBurger.ingredients.reduce((acc, item) => acc + item.price, 0) +
  //     (constructorBurger.bun && constructorBurger.bun.price * 2),
  //   [constructorBurger]
  // );

  return (
    <section className={`${styles.section} mt-25 `}>
      <div className="pl-4 mb-10 ">
        <IngredientsConstructor />
      </div>
      <div className={`${styles.order} mr-4`}>
        <div className={`${styles.price} mr-10`}>
          <span className="text text_type_digits-medium">6</span>
          <div className={styles.icon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          type="primary"
          size="large"
          htmlType="button"
          // onClick={handleMakeOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {/* {isOpen && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )} */}
    </section>
  );
};

export default BurgerConstructor;
