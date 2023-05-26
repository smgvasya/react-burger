import styles from "./forms.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { updatePassword } from "../../services/actions/user";
import { getCookie } from '../../utils/cookie';

export const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refreshToken = getCookie("refreshToken");
  const user = useSelector((state) => state.auth.user);

  const [form, setForm] = useState({});

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    dispatch(updatePassword(form));
    navigate("/reset-password");
  };

  useEffect(() => {
    if (user || refreshToken) {
      navigate("/profile");
    }
  }, [navigate, refreshToken, user])

  return (
    <>
      <form onSubmit={handlePasswordUpdate} className={styles.form}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>
        <EmailInput
          value={form.email || ""}
          name="email"
          onChange={onChange}
          extraClass="pb-6"
        />
        <Button
          htmlType="submit"
          size="medium"
        >
          Восстановить
        </Button>
        <p className="text text_type_main-default text_color_inactive pt-20">
          Вспомнили пароль?
          <Link to="/login" className={`${styles.link} text text_type_main-default pl-2`}>
            Войти
          </Link>
        </p>
      </form>
    </>
  );

};
