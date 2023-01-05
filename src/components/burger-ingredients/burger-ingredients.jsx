import React from 'react';
import styles from './burger-ingredients.module.css';
import {
    CurrencyIcon,
    Typography,
    Tab,
    Box,
    Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';

import data from '../../utils/data';
import IngredientsTabs from './ingredients-tabs'

class BurgerIngredients extends React.Component {
    render() {
        return (
            <section>
           <h1 className="text text_type_main-large" >Соберите бургер</h1>
            <IngredientsTabs/>

            </section>
        )
    }
}

export default BurgerIngredients

//   <Counter count={1} size="default" extraClass="m-1" /> 
