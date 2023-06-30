import styles from "./forms.module.css";
import { Link, useNavigate } from "react-router-dom";
import { SyntheticEvent, ChangeEvent } from "react";
import { useState } from "react";
import { useDispatch } from "../../services/types/hooks";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { updatePassword } from "../../services/actions/user";

export const ForgotPasswordPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "" });

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const handlePwdUpdate = (evt: SyntheticEvent) => {
    evt.preventDefault();

    dispatch(updatePassword(form));
    navigate("/reset-password");
  };

  return (
    <>
      <form onSubmit={handlePwdUpdate} className={styles.form}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>
        <EmailInput
          value={form.email}
          name="email"
          onChange={onChange}
          extraClass="pb-6"
        />
        <Button htmlType="submit" size="medium">
          Восстановить
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
    </>
  );
};
