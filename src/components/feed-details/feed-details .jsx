import styles from "./feed-details.module.css";
import { useLocation, matchPath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { FeedDetailsImg } from "./feed-details-img";

import {
  wsConnectStart,
  wsConnectStartUser,
  wsConnectClosed,
} from "../../services/actions/wsActions";

export const FeedDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const ingredients = useSelector((state) => state.ingredients.data);
  const { orders } = useSelector((state) => state.wsOrders);
  const { id } = useParams();

  const currentOrder = orders.find((item) => item._id === id);
  const uniqueSet = new Set(currentOrder?.ingredients);
  const uniqueList = Array.from(uniqueSet);

  // console.log(uniqueSet);

  const status = {
    created: "Создан",
    done: "Выполнен",
    pending: "Готовится",
  };

  // console.log(ingredients)
  // console.log(orders)
  // console.log(orders.ingredients)
  // console.log(currentOrder)
  // console.log(currentOrder.ingredients);

  const counter = currentOrder?.ingredients.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  const totalPrice = currentOrder?.ingredients.reduce(
    (acc, id) => acc + ingredients.find((item) => item._id === id).price,
    0
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
