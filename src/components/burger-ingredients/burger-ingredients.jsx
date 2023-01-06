import React from 'react';
import styles from './burger-ingredients.module.css';
import {
    Typography,
    Box,
} from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientsTabs from './ingredients-tabs'
import Ingredients from './ingredients'

const BurgerIngredients = () => {
     return (
        <section>
            <h1 className="text text_type_main-large pb-5" >Соберите бургер</h1>
            <IngredientsTabs />
            <Ingredients type='bun' title='Булки' />
            <Ingredients type='sauce' title='Соусы' />
            <Ingredients type='main' title='Начинки' />
        </section>  
        )

}

export default BurgerIngredients