import styles from "./feed-order-info.module.css";
import { useSelector } from "react-redux";
import { OrderInfoItem } from "./order-info-item";

export const FeedOrderInfo = () => {
  const orders = useSelector((state) => state.wsOrders.orders);

  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-large pb-5 mt-10">Лента заказов</h1>
      <div className={styles.ordersScroll}>
        {orders.map((order) => (
          <OrderInfoItem order={order} key={order._id} />
        ))}
      </div>
    </div>
  );
};
