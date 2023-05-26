import styles from "./forms.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { submitPassword } from '../../services/actions/user';

export const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setValue] = useState({ });
  const pwdResetRequested = useSelector((state) => state.auth.pwdResetRequested);
  const pwdSubmitSuccess = useSelector((state) => state.auth.pwdSubmitSuccess);

  useEffect(()=> {
    if (!pwdResetRequested) {
      navigate("/forgot-password");
    }

  }, [navigate, pwdResetRequested]);

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    dispatch(submitPassword(form));
  }

  useEffect(() => {
    if (pwdSubmitSuccess) {
      navigate("/login");
    }
  }, [navigate, pwdSubmitSuccess])

  return (
    <form
      onSubmit={handlePasswordSubmit}
      className={styles.form}
    >
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <PasswordInput
        value={form.password || ''}
        name="password"
        placeholder="Введите новый пароль"
        onChange={onChange}
        extraClass="pb-6"
      />
      <Input
        value={form.token || ''}
        type="text"
        name="token"
        placeholder="Введите код из письма"
        onChange={onChange}
        extraClass="pb-6"
      />
      <Button
        htmlType="submit"
        size="medium"
        // disabled={fillings.length <= 0 || !bun}
      >
        Сохранить
      </Button>
      <p className="text text_type_main-default text_color_inactive pt-20">
        Вспомнили пароль?
        <Link to="/login" className={`${styles.link} text text_type_main-default pl-2`}>
          Войти
        </Link>
      </p>
    </form>
  );
};
