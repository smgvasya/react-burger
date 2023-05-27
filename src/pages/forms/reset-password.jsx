import styles from "./forms.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { submitPassword } from "../../services/actions/user";

export const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState({});
  const pwdResetRequested = useSelector(
    (state) => state.auth.pwdResetRequested
  );
  const pwdSubmitSuccess = useSelector((state) => state.auth.pwdSubmitSuccess);

  useEffect(() => {
    if (!pwdResetRequested) {
      navigate("/forgot-password");
    }
  }, [navigate, pwdResetRequested]);

  const onChange = (evt) => {
    setValue({ ...value, [evt.target.name]: evt.target.value });
  };

  const handlePasswordSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitPassword(value));
  };

  useEffect(() => {
    if (pwdSubmitSuccess) {
      navigate("/login");
    }
  }, [navigate, pwdSubmitSuccess]);

  return (
    <form onSubmit={handlePasswordSubmit} className={styles.form}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <PasswordInput
        value={value.password || ""}
        name="password"
        placeholder="Введите новый пароль"
        onChange={onChange}
        extraClass="pb-6"
      />
      <Input
        value={value.token || ""}
        type="text"
        name="token"
        placeholder="Введите код из письма"
        onChange={onChange}
        extraClass="pb-6"
      />
      <Button htmlType="submit" size="medium">
        Сохранить
      </Button>
      <p className="text text_type_main-default text_color_inactive pt-20">
        Вспомнили пароль?
        <Link
          to="/login"
          className={`${styles.link} text text_type_main-default pl-2`}
        >
          Войти
        </Link>
      </p>
    </form>
  );
};
