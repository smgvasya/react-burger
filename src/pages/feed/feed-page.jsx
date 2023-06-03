import styles from "./feed-page.module.css";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FeedOrderInfo } from "../../components/feed-order-info/feed-order-info";
import { FeedOrder } from "../../components/feed-order/feed-order";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  wsConnectStart,
  wsConnectClosed,
} from "../../services/actions/wsActions";

export const FeedPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectStart());
    return () => dispatch(wsConnectClosed());
  }, [dispatch]);

  return (
    <section className={styles.main}>
      <div className={styles.containerFeed}>
        <div className={styles.container}>
          <h1 className="text text_type_main-large pb-5">
            Лента заказов
          </h1>
          <FeedOrderInfo />
        </div>
        <FeedOrder />
      </div>
    </section>
  );
};
