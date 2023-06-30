import styles from "./forms.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "../../services/types/hooks";
import { SyntheticEvent, ChangeEvent } from "react";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { registrationUser } from "../../services/actions/user";

export const RegisterPage: React.FC = () => {
  const [form, setValue] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [evt.target.name]: evt.target.value });
  };

  const submitRegistration = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(registrationUser(form));
  };

  return (
    <form className={styles.form} onSubmit={submitRegistration}>
      <h1 className="text text_type_main-medium text_color_primary pb-6">
        Регистрация
      </h1>
      <Input
        value={form.name}
        name="name"
        placeholder="Имя"
        type="text"
        onChange={onChange}
        extraClass="pb-6"
      />
      <EmailInput
        value={form.email}
        name="email"
        onChange={onChange}
        extraClass="pb-6"
      />
      <PasswordInput
        value={form.password}
        name="password"
        onChange={onChange}
        extraClass="pb-6"
      />
      <Button htmlType="submit" size="medium">
        Зарегистрироваться
      </Button>
      <p className="text text_type_main-default text_color_inactive pt-20">
        Уже зарегистрированы?
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
