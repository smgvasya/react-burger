import  { useState } from 'react';

import styles from './burger-ingredients.module.css';
import IngredientsTabs from './ingredients-tabs'
import Ingredients from './ingredients'

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

const BurgerIngredients = ({data}) => {


     return (
        <section className={ styles.section }>
            <h1 className="text text_type_main-large pb-5 mt-10" >Соберите бургер</h1>
            <IngredientsTabs />
            <div className={ styles.ingredient }>
                <Ingredients type='bun' title='Булки' data = {data} />
                <Ingredients type='sauce' title='Соусы' data = {data} />
                <Ingredients type='main' title='Начинки' data = {data} />
            </div>
            <Modal>
               <IngredientDetails data = {data}/>
            </Modal>
        </section>
        )

}

export default BurgerIngredients

// getModalData={getModalData}

// {isOpened &&
//     <Modal close={modalClose}>
//     <IngredientDetails data={ingredient} />
//     </Modal>}
