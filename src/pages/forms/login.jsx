import styles from './forms.module.css';
import { Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { loginUser } from '../../services/actions/user';

export const LoginPage = () => {
  const navigate = useNavigate()
  const {location} = useLocation()
  const [value, setValue] = useState({});

  const onChange = evt => {
    setValue({ ...value, [evt.target.name]: evt.target.value });
  };

  const dispatch = useDispatch();

  const onSubmitLogin = (evt) => {
    evt.preventDefault();
    dispatch(loginUser(value))
  //  return <Navigate to={location.from} />
  //  navigate('/profile')
  }

  return (
    <form
    onSubmit={onSubmitLogin}
    className={styles.form}>
      <h1 className="text text_type_main-medium text_color_primary pb-6">
        Вход
      </h1>
      <EmailInput
        value={value.email || ''}
        name='email'
        onChange={onChange}
        extraClass='pb-6'
      />
      <PasswordInput
        value={value.password || ''}
        name='password'
        onChange={onChange}
        extraClass='pb-6'
      />
      <Button
      htmlType='submit'
      size='large'
      // disabled={fillings.length <= 0 || !bun}
      >
        Войти
      </Button>
      <p className='text text_type_main-default text_color_inactive pt-20'>
        Вы - новый пользователь?
        <Link to="/register" className={`${styles.link} text text_type_main-default pl-2`}>
          Зарегистрироваться
        </Link>
      </p>
      <p className='text text_type_main-default text_color_inactive pt-4'>
        Забыли пароль?
        <Link to="/forgot-password" className={`${styles.link} text text_type_main-default pl-2`}>
          Восстановить пароль
        </Link>
      </p>
    </form>
  )
}
