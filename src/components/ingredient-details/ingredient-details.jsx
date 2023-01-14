import React from 'react';
import styles from './ingredient-details.module.css';
import {ingredientsPropTypes} from '../../utils/propTypes'


 const IngredientDetails = ({ data }) => {
    return (
      <>
        <h1 className='text text_type_main-large pl-10 pt-10'>Детали ингредиента</h1>
        <div className={styles.container}>
          <img className='pb-4' src={data.image_large} alt={data.name} />
          <p className='text text_type_main-default pb-8' >{data.name}</p>
          <ul className={styles.list}>

            <li className={styles.item}>
              <span className="text text_type_main-default text_color_inactive">Калории, ккал</span>
              <span className="text text_type_digits-default pt-2">
                {data.calories}
              </span>
            </li>

            <li className={styles.item}>
              <span className="text text_type_main-default text_color_inactive">Белки, г</span>
              <span className="text text_type_digits-default pt-2">
                {data.proteins}
              </span>
            </li>

            <li className={styles.item}>
              <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
              <span className="text text_type_digits-default pt-2">
                {data.fat}
              </span>
            </li>

            <li className={styles.item}>
              <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
              <span className="text text_type_digits-default pt-2">
                {data.carbohydrates}
              </span>
            </li>

          </ul>
        </div>
      </>
    );
  }

  IngredientDetails.propTypes = {
    data: ingredientsPropTypes
  };

  export default IngredientDetails
