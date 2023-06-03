import styles from "./profile.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  wsConnectStartUser,
  wsConnectClosed,
} from "../../services/actions/wsActions";
import { FeedOrderInfo } from "../../components/feed-order-info/feed-order-info";
import { NavProfile } from "../../components/nav-profile/nav-profile";

export const ProfileOrders = () => {
  const dispatch = useDispatch();

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
