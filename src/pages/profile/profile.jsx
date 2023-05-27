import styles from "./profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { getCookie } from "../../utils/cookie";
import { updateUserInfo, logoutUser } from "../../services/actions/user";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);
  const password = useSelector((state) => state.auth.password);
  const refreshToken = getCookie("refreshToken");
  const dispatch = useDispatch();
  const [isChanged, setIsChanged] = useState(false);

  const [form, setForm] = useState({
    name: user.name || "",
    email: user.email || "",
    password: password || "******",
  });

  useEffect(() => {
    if (user && password) {
      setForm({ name: user.name, email: user.email, password: password });
    } else if (user) {
      setForm({ name: user.name, email: user.email, password: "******" });
    } else
      setForm({
        name: user.name || "",
        email: user.email || "",
        password: password || "******",
      });
  }, [user]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setIsChanged(true);
  };

  const handleCancel = () => {
    setForm({
      name: user.name || "",
      email: user.email || "",
      password: password || "******",
    });
    setIsChanged(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo(form));
    setIsChanged(false);
  };

  const handleOut = (e) => {
    e.preventDefault();
    dispatch(logoutUser(refreshToken));
  };
  const swithActiveColor = ({ isActive }) => ({
    color: !isActive ? "#8585AD" : "#F2F2F3",
  });

  return (
    <section className={`${styles.section}`}>
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
      {user && (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Имя"
            onChange={onChange}
            value={form.name}
            name="name"
            icon="EditIcon"
            extraClass={`mb-6 ${styles.input}`}
          />
          <EmailInput
            placeholder="Логин"
            onChange={onChange}
            value={form.email}
            name="email"
            icon="EditIcon"
            extraClass={`mb-6 ${styles.input}`}
          />
          <PasswordInput
            placeholder="Пароль"
            onChange={onChange}
            value={form.password}
            name="password"
            icon="EditIcon"
            extraClass={styles.input}
          />
          {isChanged && (
            <div className={`mt-6 mr-4 ${styles.buttons}`}>
              <Button
                size="medium"
                htmlType="button"
                type="secondary"
                onClick={handleCancel}
              >
                Отмена
              </Button>
              <Button htmlType="submit" size="medium" type="primary">
                Сохранить
              </Button>
            </div>
          )}
        </form>
      )}
    </section>
  );
};
