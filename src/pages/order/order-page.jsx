import styles from './order-page.module.css';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FeedOrderInfo } from '../../components/feed-order-info/feed-order-info';
import { FeedOrder } from '../../components/feed-order/feed-order';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  wsConnectStart,
  wsConnectClosed,
} from '../../services/actions/wsActions';

export const OrderPage = () => {
  const dispatch = useDispatch();

  const ordersAll = useSelector(state => state.wsOrders.ordersAll);
  const total = useSelector(state => state.wsOrders.total);
  const totalToday = useSelector(state => state.wsOrders.getTotalToday);


  return (
    <section className={styles.main}>

    </section>
  );
};
