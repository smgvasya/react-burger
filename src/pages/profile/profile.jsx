import styles from './profile.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Input, EmailInput, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { getCookie } from '../../utils/cookie';
import { updateUserInfo, logoutUser } from '../../services/actions/user';
import { useEffect } from 'react';


import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileTab = ({description, onLogout}) => {

  const commonClassName = `${styles.link} text text_type_main-medium pt-4 pb-4 `;
  const activeClassName = "text_color_primary";
  const inactiveClassName = "text_color_inactive"

  return (
    <div className={`${styles.container} ml-5 mr-15`}>
      <nav className={`${styles.nav}`}>
        <NavLink
          to="/profile"
          end
          className = {({ isActive }) =>
            (commonClassName +
              (isActive ? activeClassName : inactiveClassName))
          }
        >
          Профиль
        </NavLink>
        <NavLink
          to="/profile/orders"
          className = {({ isActive }) =>
            (commonClassName +
              (isActive ? activeClassName : inactiveClassName))
          }
        >
          История заказов
        </NavLink>
        <NavLink
          to="/login"
          onClick={onLogout}
          className = {({ isActive }) =>
            (commonClassName +
              (isActive ? activeClassName : inactiveClassName))
          }
        >
          Выход
        </NavLink>
      </nav>
      <p className="text text_type_main-default text_color_inactive pt-20">
        {description}
      </p>
    </div>
  );
}

ProfileTab.propTypes = {
  description: PropTypes.string.isRequired,
};


export default ProfileTab;


export const ProfilePage = () => {

  const description = "В этом разделе вы можете изменить свои персональные данные";

  const userInfo = useSelector((state) => state.auth.user);
  const password = useSelector((state) => state.auth.password);

  const formInit = {
    name: userInfo?.name || '',
    email: userInfo?.email || '',
  };

  const [form, setForm] = useState(formInit);
  const [isChanged, setIsChanged] = useState(false);

  const refreshToken = getCookie("refreshToken");

  const dispatch = useDispatch();


  useEffect(() => {
    if (userInfo && password) {
      setForm({name: userInfo.name, email: userInfo.email});
    } else if (userInfo) {
      setForm({name: userInfo.name, email: userInfo.email});
    } else
      setForm(formInit);
  }, [userInfo]);

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setIsChanged(true);
  };

  const handleCancel = () => {
    setForm(formInit);
    setIsChanged(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo(form))
    setIsChanged(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser(refreshToken));
  }


  return (
    <div className={`${styles.container}`}>
      <ProfileTab description={description} onLogout={handleLogout}/>
      {userInfo && (<form onSubmit={handleSubmit} className={styles.form}>
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
        { isChanged && <div className={`mt-6 mr-4 ${styles.handlers}`}>
          <Button size="medium" htmlType="button" type="secondary" onClick={handleCancel}>
            Отмена
          </Button>
          <Button htmlType="submit" size="medium">
            Сохранить
          </Button>
        </div>}
      </form>)}
    </div>
  )
}


// const password = useSelector((state) => state.auth.password);

//   const formInit = {
//     name: userInfo?.name || '',
//     email: userInfo?.email || '',
//     password: password || '******'
//   };

//   const [form, setForm] = useState(formInit);
//   const [isChanged, setIsChanged] = useState(false);

//   const refreshToken = getCookie("refreshToken");

//   const dispatch = useDispatch();


//   useEffect(() => {
//     if (userInfo && password) {
//       setForm({name: userInfo.name, email: userInfo.email, password: password});
//     } else if (userInfo) {
//       setForm({name: userInfo.name, email: userInfo.email, password: "******"});
//     } else
//       setForm(formInit);
//   }, [userInfo, password]);
