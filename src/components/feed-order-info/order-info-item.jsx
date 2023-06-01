import styles from "./feed-order-info.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { OrderInfoIngredient } from "./order-info-ingredient";

export const OrderInfoItem = ({ order }) => {
  const location = useLocation();
  const ingredients = useSelector((state) => state.ingredients.data);

  const status = {
    created: "Создан",
    done: "Выполнен",
    pending: "Готовится",
  };

  const orderIngredients = () => {
    const elements = [];
    order.ingredients.forEach((ingredientId) => {
      ingredients.forEach((ingredient) => {
        if (ingredient._id === ingredientId) {
          elements.push(ingredient);
        }
      });
    });
    return elements;
  };

  // const ingredientsInOrder = ingredients
  //   .filter((item) => order.ingredients.includes(item.info._id))
  //   .map((item) => item.info);

  // const totalPrice = useMemo(() => {
  //   return ingredientsInOrder.reduce((acc, item) => acc + item.price, 0);
  // }, [ingredientsInOrder]);

  return (
    <Link
      to={{
        pathname: `${location.pathname}/${order._id}`,
        state: { background: location },
      }}
      className={styles.orderInfoItem}
    >
      <div className={styles.info}>
        <span className="text text_type_digits-default">{`#${order.number}`}</span>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(order.createdAt)}
        />
      </div>
      <h2 className="text text_type_main-medium">{order.name}</h2>

      <p className={`text text_type_main-default status`}>
        {status[order.status]}
      </p>

      <div className={`${styles.ingredientsInfo}`}>
        <OrderInfoIngredient ingredients={orderIngredients} />

        <span className={`${styles.totalPrice} text text_type_digits-medium`}>
          {333}
          <CurrencyIcon type="primary" />
        </span>
      </div>
    </Link>
  );
};
