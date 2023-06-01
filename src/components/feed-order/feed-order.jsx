import styles from './feed-order.module.css';

import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';


import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const FeedOrder = () => {
  const orders = useSelector(state => state.wsOrders.orders);
  const total = useSelector(state => state.wsOrders.total);
  const totalToday = useSelector(state => state.wsOrders.totalToday);

  const doneOrders = useMemo(() => orders && orders.filter((order) => order.status === 'done'), [orders]);
  const pendingOrders = useMemo(() => orders && orders.filter((order) => order.status === 'pending'), [orders]);

  return (
    <div className={styles.ordersInfo}>
    <div className={styles.ordersStatus}>
      <div>
        <p className="text text_type_main-medium mb-6">Готовы:</p>
        <ul className={styles.ordersStatusList}>
          {doneOrders && doneOrders.slice(0, 10).map((order) => (
            <li key={order._id}>
              <p className={`text text_type_digits-default ${styles.orderNumber_done}`}>{order.number}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text text_type_main-medium mb-6">В работе:</p>
        <ul className={styles.ordersStatusList}>
          {pendingOrders && pendingOrders.map((order) => (
            <li key={order._id}>
              <p className="text text_type_digits-default">{order.number}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className={styles.ordersTotal}>
      <p className="text text_type_main-medium">Выполнено за все время:</p>
      <p className="text text_type_digits-large">{total}</p>
    </div>
    <div className={styles.ordersToday}>
      <p className="text text_type_main-medium">Выполнено за сегодня:</p>
      <p className="text text_type_digits-large">{totalToday}</p>
    </div>
  </div>
  );
};
