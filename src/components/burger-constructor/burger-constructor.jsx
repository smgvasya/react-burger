import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import styles from "./burger-constructor.module.css";
import {
  CurrencyIcon,
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsConstructor from "./ingredients-constructor";
import {
  addIngredient,
  deleteIngredient,
} from "../../services/actions/burger-constructor";
import {
  getOrder,
  OrderSuccess,
  OrderClose,
} from "../../services/actions/order-details";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { bun, fillings } = useSelector((state) => state.constructor);
  // const { burgerStuff } = useSelector((store) => store.constructor);

  const ingredients = useSelector((state) => state.ingredients.data);
  const orderOpen = useSelector((state) => state.order.openModal);
  const orderNumber = useSelector((state) => state.order.data);

  const handleCloseModal = () => {
    dispatch(OrderClose());
  };

  // const totalPrice = useMemo(() => {
  //   return (
  //   fillings.reduce((acc, item) => acc + item.price, 0) + bun
  //     ? bun.price * 2 : 0);
  // }, [bun, fillings]);

  const [, dropTarget] = useDrop(() => ({
    accept: "ITEM",
    drop: item => dispatch(addIngredient(item)),
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  }));

  const handleMakeOrder = () => {
    const arrayId = ingredients.map((item) => item._id.toString());
    dispatch(getOrder(arrayId));
  };

  const onDelete = (id) => {
    dispatch(deleteIngredient(id));
  };

  return (
    <section className={`${styles.section} mt-25 `}>
      <div className={`${styles.empty} pl-4 mb-10 `} ref={dropTarget}>
        {bun ? (
          <div className="ml-8 mr-2">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun.name + " (верх)"}
              price={bun.price}
              thumbnail={bun.image}
              key={bun.id}
            />
          </div>
        ) : (
          <h2
            className={`${styles.request} text text_type_main-medium text_color_inactive`}
          >
            → → перетащите булку
          </h2>
        )}
        {fillings? (
          <ul className={styles.ingredients}>
            {fillings.map((item, index) => (
              <IngredientsConstructor
                item={item}
                index={index}
                key={item._id}
                handleClose={() => onDelete(item.id)}
              />
            ))}
          </ul>
        ) : (
          bun && (
            <h2
              className={`${styles.request} text text_type_main-medium text_color_inactive`}
            >
              → → подберите начинку
            </h2>
          )
        )}
        {bun && (
          <div className="ml-8 mr-2">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun.name + " (низ)"}
              price={bun.price}
              thumbnail={bun.image}
              key={bun.id}
            />
          </div>
        )}
      </div>
      <div className={`${styles.order} mr-4`}>
        <div className={`${styles.price} mr-10`}>
          <span className="text text_type_digits-medium">{0}</span>
          <div className={styles.icon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          type="primary"
          size="large"
          htmlType="button"
          onClick={handleMakeOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {orderOpen && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
