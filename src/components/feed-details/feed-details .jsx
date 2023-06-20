import styles from "./feed-details.module.css";
import { useSelector } from "react-redux";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { FeedDetailsImg } from "./feed-details-img";
import { status } from "../../utils/constants";

export const FeedDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const ingredients = useSelector((state) => state.ingredients.data);
  const orders = useSelector((state) => state.wsOrders.orders);
  const ordersUser = useSelector((state) => state.wsOrdersUser.orders);

  const userLocation = location.pathname.includes("profile/orders")
    ? true
    : false;
  const ordersState = userLocation ? ordersUser : orders;

  const currentOrder = ordersState.find((item) => item._id === id);

  const uniqueSet = new Set(currentOrder?.ingredients);
  const uniqueList = Array.from(uniqueSet);

  const counter = useMemo(
    () =>
      currentOrder?.ingredients.reduce((acc, id) => {
        acc[id] = Object.hasOwn(acc, id) ? acc[id] + 1 : 1;
        return acc;
      }, {}),
    [currentOrder?.ingredients]
  );

  const totalPrice = useMemo(
    () =>
      currentOrder?.ingredients.reduce(
        (acc, id) => acc + ingredients.find((item) => item._id === id).price,
        0
      ),
    [currentOrder?.ingredients, ingredients]
  );

  return (
    currentOrder && (
      <div className={styles.feedOrderDetails}>
        <p className="text text_type_digits-default">{`#${currentOrder.number}`}</p>
        <div className="p-5" />
        <p className="text text_type_main-medium">{currentOrder.name}</p>
        <div className="p-2" />
        <span
          className={`text text_type_main-default ${
            currentOrder.status === "done" && styles.orderNumberDone
          }`}
        >
          {status[currentOrder.status]}
        </span>
        <div className="p-7" />
        <p className="text text_type_main-medium">Состав:</p>
        <div className="p-3" />
        <ul className={styles.ingredientsList}>
          {uniqueList &&
            uniqueList.map((ingredient, index) => (
              <li key={index} className={styles.ingredientsItem}>
                <FeedDetailsImg
                  key={index}
                  id={ingredient}
                  count={counter[ingredient]}
                />
              </li>
            ))}
        </ul>
        <div className="p-5" />
        <div className={styles.ingredientPrice}>
          <FormattedDate
            className="text text_type_main-default text_color_inactive"
            date={new Date(currentOrder.createdAt)}
          />
          <p className={`${styles.orderPrice} text text_type_digits-default`}>
            {totalPrice}
            <CurrencyIcon type="primary" />
          </p>
        </div>
      </div>
    )
  );
};
