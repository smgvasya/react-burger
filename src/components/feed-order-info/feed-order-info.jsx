import styles from "./feed-order-info.module.css";
import { useSelector } from "react-redux";
import { OrderInfoItem } from "./order-info-item";
import { useLocation } from "react-router-dom";

export const FeedOrderInfo = () => {
  const location = useLocation();
  const orders = useSelector((state) => state.wsOrders.orders);
  const ordersUser = useSelector((state) => state.wsOrdersUser.orders);
  const userLocation = location.pathname.includes("/profile") ? true : false;
  const ordersState = userLocation ? [...ordersUser].reverse() : orders;

  // console.log(ordersUser)
  return (
    <div className={styles.ordersScroll}>
      {ordersState.map((order) => (
        <OrderInfoItem order={order} key={order._id} />
      ))}
    </div>
  );
};
