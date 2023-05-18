import { useMemo } from "react";
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
import { getOrder, orderClose } from "../../services/actions/order-details";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { bun, fillings } = useSelector((state) => state.burgerConstructor);
  const orderOpen = useSelector((state) => state.order.openModal);
  const orderNumber = useSelector((state) => state.order.data);

  const handleCloseModal = () => {
    dispatch(orderClose());
  };

  const totalPrice = useMemo(() => {
    return (
      fillings.reduce((acc, item) => acc + item.price, 0) +
      (bun ? bun.price * 2 : 0)
    );
  }, [bun, fillings]);

  const [, dropTarget] = useDrop(() => ({
    accept: "item",
    drop: (item) => {
      dispatch(addIngredient(item));
    },
  }));

  const handleMakeOrder = () => {
    const arrayId = [bun._id, ...fillings.map((item) => item._id), bun._id];
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
        {fillings.length > 0 ? (
          <ul className={styles.ingredients}>
            {fillings.map((item, index) => (
              <IngredientsConstructor
                item={item}
                index={index}
                key={item.id}
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
          <span className="text text_type_digits-medium">{totalPrice}</span>
          <div className={styles.icon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          type="primary"
          size="large"
          htmlType="button"
          onClick={handleMakeOrder}
          disabled={fillings.length <= 0 || !bun}
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
