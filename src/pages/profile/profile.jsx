import styles from "./profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { updateUserInfo } from "../../services/actions/user";
import { useEffect } from "react";
import { NavProfile } from "../../components/nav-profile/nav-profile";

export const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);
  const password = useSelector((state) => state.auth.password);
  const dispatch = useDispatch();
  const [isChanged, setIsChanged] = useState(false);

  const initUserInfo = {
    name: user.name || "",
    email: user.email || "",
    password: "",
  };

  const [form, setForm] = useState(initUserInfo);

  useEffect(() => {
    if (user && password) {
      setForm({ name: user.name, email: user.email, password: password });
    } else if (user) {
      setForm({ name: user.name, email: user.email, password: "" });
    } else setForm(initUserInfo);
  }, [user]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setIsChanged(true);
  };

  const handleCancel = () => {
    setForm(initUserInfo);
    setIsChanged(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo(form));
    setIsChanged(false);
  };

  return (
    <section className={`${styles.section}`}>
      <NavProfile />
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
