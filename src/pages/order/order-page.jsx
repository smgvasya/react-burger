import styles from "./order-page.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useDispatch } from "react";
import {
  wsConnectStart,
  wsConnectStartUser,
  wsConnectClosed,
} from "../../services/actions/wsActions";
import { FeedDetails } from "../../components/feed-details/feed-details ";

export const OrderPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // const ordersAll = useSelector((state) => state.wsOrders.ordersAll);
  // const total = useSelector((state) => state.wsOrders.total);
  // const totalToday = useSelector((state) => state.wsOrders.getTotalToday);

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
    <section className={styles.main}>
      <FeedDetails />
    </section>
  );
};
