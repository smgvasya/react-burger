import styles from './feed-page.module.css';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FeedOrderInfo } from '../../components/feed-order-info/feed-order-info';
import { FeedOrder } from '../../components/feed-order/feed-order';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  wsConnectStart,
  wsConnectClosed,
} from '../../services/actions/wsActions';

export const FeedPage = () => {
  const dispatch = useDispatch();

  const ordersAll = useSelector(state => state.wsOrders.ordersAll);
  const total = useSelector(state => state.wsOrders.total);
  const totalToday = useSelector(state => state.wsOrders.getTotalToday);

  useEffect(() => {
    dispatch(wsConnectStart());
    return () =>
      dispatch(wsConnectClosed());
  }, [dispatch]);

  return (
    <section className={styles.main}>
          <div className={styles.container}>
            <FeedOrderInfo />
            <FeedOrder />
          </div>
    </section>
  );
};
