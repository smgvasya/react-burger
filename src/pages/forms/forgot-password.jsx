import styles from "./forms.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { updatePassword } from "../../services/actions/user";

export const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setValue] = useState({});

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();

    dispatch(updatePassword(form));
    navigate("/reset-password");
  };

  return (
    <>
      <form onSubmit={handlePasswordUpdate} className={styles.form}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>
        <EmailInput
          value={form?.email || ""}
          name="email"
          onChange={onChange}
          extraClass="pb-6"
        />
        <Button
          htmlType="submit"
          size="medium"
          // disabled={fillings.length <= 0 || !bun}
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
