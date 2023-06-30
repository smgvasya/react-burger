import React from "react";
import styles from "./nav-profile.module.css";
import { useDispatch } from "../../services/types/hooks";
import { getCookie } from "../../utils/cookie";
import { logoutUser } from "../../services/actions/user";
import { NavLink } from "react-router-dom";
import { SyntheticEvent } from "react";

type PropsType = {
  isActive?: boolean;
};

export const NavProfile: React.FC = () => {
  const refreshToken = getCookie("refreshToken") as string;
  const dispatch = useDispatch();

  const handleOut = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutUser(refreshToken));
  };
  const swithActiveColor = ({ isActive }: PropsType) => ({
    color: !isActive ? "#8585AD" : "#F2F2F3",
  });

  return (
    <div className={`${styles.container} pl-5`}>
      <nav className={`${styles.navtab}`}>
        <NavLink
          to="/profile"
          end
          className={`text text_type_main-medium pt-4 pb-4 ${styles.link}`}
          style={swithActiveColor}
        >
          Профиль
        </NavLink>
        <NavLink
          to="/profile/orders"
          className={`text text_type_main-medium pt-4 pb-4 ${styles.link}`}
          style={swithActiveColor}
        >
          История заказов
        </NavLink>
        <NavLink
          to="/login"
          onClick={handleOut}
          className={`text text_type_main-medium pt-4 pb-20 ${styles.link}`}
          style={swithActiveColor}
        >
          Выход
        </NavLink>
      </nav>
      <p className="text text_type_main-default text_color_inactive">
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </div>
  );
};
