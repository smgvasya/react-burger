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
        <header className={ styles.header } > 
            <nav className={ styles.navigation }>
               <div>
                  <a href="#" className={`pt-4 pr-5 pb-4 pl-5 mr-2 ${styles.link}`} >
                    <BurgerIcon type="primary"/>
                    <span className="pl-2 text text_type_main-default " >Конструктор</span>
                  </a>

                  <a href="#" className={`pt-4 pr-5 pb-4 pl-5 ${styles.link}`} >
                  <ListIcon type="secondary"/>
                  <span className="pl-2 text text_type_main-default text_color_inactive " >Лента заказов</span>
                  </a>
               </div>

               <Logo />

               <div>
                  <a href="#" className={`pt-4 pr-5 pb-4 pl-5 ${styles.link}`} >
                    <ProfileIcon type="secondary"/>
                    <span className="pl-2 text text_type_main-default text_color_inactive" >Личный кабинет</span>
                  </a>
               </div>
            </nav>
         </header>
        );
      }
}
// className={styles.}

export default AppHeader