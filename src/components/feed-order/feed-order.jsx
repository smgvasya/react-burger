import styles from "./feed-order.module.css";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const FeedOrder = () => {
  const orders = useSelector((state) => state.wsOrders.orders);
  const total = useSelector((state) => state.wsOrders.total);
  const totalToday = useSelector((state) => state.wsOrders.totalToday);

  const doneOrders = useMemo(
    () => orders && orders.filter((order) => order.status === "done"),
    [orders]
  );
  const pendingOrders = useMemo(
    () => orders && orders.filter((order) => order.status === "pending"),
    [orders]
  );

  return (
    <div className={styles.ordersInfo}>
      <div className={styles.ordersNumberInfo}>
        <div>
          <p className="text text_type_main-medium pb-6">Готовы:</p>
          <ul className={styles.ordersNumberList}>
            {doneOrders &&
              doneOrders.slice(0, 10).map((order) => (
                <li key={order._id}>
                  <p
                    className={`text text_type_digits-default ${styles.orderNumberDone}`}
                  >
                    {order.number}
                  </p>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <p className="text text_type_main-medium pb-6">В работе:</p>
          <ul className={styles.ordersNumberList}>
            {pendingOrders &&
              pendingOrders.map((order) => (
                <li key={order._id}>
                  <p className="text text_type_digits-default">
                    {order.number}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className="text text_type_digits-large">{total}</p>
      </div>
      <div>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className="text text_type_digits-large">{totalToday}</p>
      </div>
    </div>
  );
};
