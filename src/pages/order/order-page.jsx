import styles from "./order-page.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  wsConnectStart,
  wsConnectStartUser,
  wsConnectClosed,
} from "../../services/actions/wsActions";
import { FeedDetails } from "../../components/feed-details/feed-details ";

export const OrderPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const wsConnected = (store) => store.wsOrders.wsConnected;

  useEffect(() => {
    if (location.pathname.includes("/profile")) {
      dispatch(wsConnectStartUser());
    } else {
      dispatch(wsConnectStart());
    }
    return () => {
      dispatch(wsConnectClosed());
    };
  }, [dispatch, location.pathname]);

  return (
    wsConnected && (
      <section className={styles.main}>
        <FeedDetails />
      </section>
    )
  );
};
