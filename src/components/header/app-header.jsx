import styles from "./app-header.module.css";
import { NavLink, useLocation, Link } from "react-router-dom";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  const { pathname } = useLocation();

  const swithActiveColor = ({ isActive }) => ({
    color: !isActive && "#8585AD",
  })
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.info}>
          <NavLink
            to="/"
            className={`pt-4 pr-5 pb-4 pl-5 ${styles.link}`}
            style={swithActiveColor}
          >
            <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
            <span className="pl-2 text text_type_main-default">
              Конструктор
            </span>
          </NavLink>

          <NavLink
            to="/feed"
            className={`pt-4 pr-5 pb-4 pl-5 ${styles.link}`}
            style={swithActiveColor}
          >
            <ListIcon type={pathname === "/feed" ? "primary" : "secondary"} />
            <span className="pl-2 text text_type_main-default">
              Лента заказов
            </span>
          </NavLink>
        </div>

        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.account}>
          <NavLink
            to="/profile"
            className={`pt-4 pr-5 pb-4 pl-5  ${styles.link}`}
            style={swithActiveColor}
          >
            <ProfileIcon
              type={
                pathname === "/profile" || pathname === "/profile/orders"
                  ? "primary"
                  : "secondary"
              }
            />
            <span className="pl-2 text text_type_main-default">
              Личный кабинет
            </span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
