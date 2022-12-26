import React from 'react';
import styles from './app-header.module.css';
import {
    BurgerIcon,
    ListIcon,
    ProfileIcon,
    Typography,
    Tab,
    Logo,
    Box,

} from '@ya.praktikum/react-developer-burger-ui-components';


class AppHeader extends React.Component {

    render() {
        return (
         <div> 
            <nav>
               <div>
                  <BurgerIcon type="primary"/>
                  <span className="text text_type_main-default" >Конструктор</span>
                  <ListIcon type="primary"/>
                  <span className="text text_type_main-default" >Лента заказов</span>
               </div>

               <Logo />

               <div>
                  <ProfileIcon type="primary"/>
                  <span className="text text_type_main-default" >Личный кабинет</span>
               </div>
            </nav>
         </div>
        );
      }
}
// className={styles.}

export default AppHeader