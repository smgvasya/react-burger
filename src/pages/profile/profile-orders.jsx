import styles from "./profile.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  wsConnectStartUser,
  wsConnectClosed,
} from "../../services/actions/wsActions";
import { FeedOrderInfo } from "../../components/feed-order-info/feed-order-info";
import { NavProfile } from "../../components/nav-profile/nav-profile";
import { Link, useLocation } from "react-router-dom";

export const ProfileOrders = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const orders = useSelector((state) => state.wsOrders.orders);

  useEffect(() => {
    dispatch(wsConnectStartUser());
    return () => {
      dispatch(wsConnectClosed());
    };
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <NavProfile />
      <FeedOrderInfo />
    </section>
  );
};
