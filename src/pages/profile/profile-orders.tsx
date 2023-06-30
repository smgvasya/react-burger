import styles from "./profile.module.css";
import { useEffect } from "react";
import { useDispatch } from "../../services/types/hooks";
import {
  wsConnectStartUser,
  wsConnectClosedUser,
} from "../../services/actions/wsActionsUser";
import { FeedOrderInfo } from "../../components/feed-order-info/feed-order-info";
import { NavProfile } from "../../components/nav-profile/nav-profile";

export const ProfileOrders: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectStartUser());
    return () => {
      dispatch(wsConnectClosedUser());
    };
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <NavProfile />
      <FeedOrderInfo />
    </section>
  );
};
