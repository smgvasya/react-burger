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
            <Ingredients type='buns' title='Булки' />
            <Ingredients type='sauces' title='Соусы' />
            <Ingredients type='mains' title='Начинки' />
        </section>  
        )

}

export default BurgerIngredients

// class BurgerIngredients extends React.Component {
//     constructor(props){
//         super(props);
//         this.buns = data.filter((item) => item.type === 'bun');
//         this.sauces = data.filter((item) => item.type === 'sauce');
//         this.fillings = data.filter((item) => item.type === 'main');
//     }

//     render() {
//         return (
//             <section>
//            <h1 className="text text_type_main-large pb-5" >Соберите бургер</h1>
//             <IngredientsTabs />
//             <Ingredients type={this.buns} title={'Булки'} />
//             <Ingredients type={this.sauces} title={'Соусы'} />
//             <Ingredients type={this.fillings} title={'Начинки'} />
//             </section>  
//         )
//     }
// }
