import styles from "./feed-order-info.module.css";
import { useSelector } from "react-redux";
import { OrderInfoItem } from "./order-info-item";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const FeedOrderInfo = () => {
  const location = useLocation();
  const orders = useSelector((state) => state.wsOrders.orders);
  const userLocation = location.pathname === "/profile/orders"
    ? true
    : false;
  const rightOrder = [...orders].reverse();

  const ordersDirection = userLocation ? rightOrder : orders;

  return (
      <div className={styles.ordersScroll}>
        {ordersDirection.map((order) => (
          <OrderInfoItem order={order} key={order._id} />
        ))}
      </div>
  );
};
