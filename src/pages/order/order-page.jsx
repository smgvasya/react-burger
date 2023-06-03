import styles from "./order-page.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  wsConnectStart,
  wsConnectClosed,
} from "../../services/actions/wsActions";
import {
  wsConnectStartUser,
  wsConnectClosedUser,
} from "../../services/actions/wsActionsUser";
import { FeedDetails } from "../../components/feed-details/feed-details ";

export const OrderPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("profile/orders")) {
      dispatch(wsConnectStartUser());
    }
    return () => {
      dispatch(wsConnectClosedUser());
    };
  }, [dispatch, location.pathname]);

  useEffect(() => {
    if (location.pathname.includes("/feed")) {
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
