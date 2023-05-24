import styles from './forms.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { registrationUser } from '../../services/actions/user';

export const RegisterPage = () => {

  const [form, setValue] = useState({});

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const submitRegistration = (e) => {
    e.preventDefault();

    dispatch(registrationUser(form));
  }

  return (
    <form
    className={styles.form}
    onSubmit={submitRegistration}
    >
      <h1 className="text text_type_main-medium text_color_primary pb-6">
        Регистрация
      </h1>
      <Input
        value={form.name || ''}
        name="name"
        placeholder="Имя"
        type="text"
        onChange={onChange}
        extraClass="pb-6"
      />
      <EmailInput
        value={form.email || ''}
        name="email"
       onChange={onChange}
        extraClass="pb-6"
      />
      <PasswordInput
        value={form.password || ''}
        name="password"
        onChange={onChange}
        extraClass="pb-6"
      />
      <Button
      htmlType="submit"
      size="medium"
      // disabled={fillings.length <= 0 || !bun}
      >
        Зарегистрироваться
      </Button>
      <p className="text text_type_main-default text_color_inactive pt-20">
        Уже зарегистрированы?
        <Link to="/login" className={`${styles.link} text text_type_main-default pl-2`}>
          Войти
        </Link>
      </p>
    </form>
  )
}
