import styles from './burger-ingredients.module.css';
import IngredientsTabs from './ingredients-tabs'
import Ingredients from './ingredients'

const BurgerIngredients = () => {
     return (
        <section className={ styles.section }>
            <h1 className="text text_type_main-large pb-5" >Соберите бургер</h1>
            <IngredientsTabs />
            <div className={ styles.ingredient }>
                <Ingredients type='bun' title='Булки' />
                <Ingredients type='sauce' title='Соусы' />
                <Ingredients type='main' title='Начинки' />
            </div>
        </section>  
        )

}

export default BurgerIngredients