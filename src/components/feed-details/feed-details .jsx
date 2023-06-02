import styles from "./feed-details.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useDispatch, useSelector } from "react";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useParams } from 'react-router-dom';
import {
  wsConnectStart,
  wsConnectStartUser,
  wsConnectClosed,
} from "../../services/actions/wsActions";

export const FeedDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const ingredients = useSelector((state) => state.ingredients.data);

  const status = {
    created: "Создан",
    done: "Выполнен",
    pending: "Готовится",
  };

  const orders = useSelector((state) => state.wsOrders.orders);
  const total = useSelector((state) => state.wsOrders.total);
  const totalToday = useSelector((state) => state.wsOrders.getTotalToday);

  return (
    <section className={styles.main}>

    </section>
  );
};
