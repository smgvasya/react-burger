import styles from "./feed-order-info.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderInfoItem } from "./order-info-item";

export const FeedOrderInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const ingredients = useSelector((state) => state.ingredients.data);
  const ordersAll = useSelector((state) => state.wsOrders.orders);



  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-large pb-5 mt-10">Лента заказов</h1>
      <div className={styles.ordersScroll}>
        {ordersAll.map((order) => <OrderInfoItem order={order} key={order._id}/>)}
      </div>
    </div>
  );
};
