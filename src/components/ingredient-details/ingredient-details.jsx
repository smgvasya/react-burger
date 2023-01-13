import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from "prop-types";


 const IngredientDetails = ({ data }) => {
    return (
      <>
        <h1 className={`text text_type_main-large ml-10 mt-10 ${styles.title}`}>Детали ингредиента</h1>
        {/* <div className={styles.container}> */}
          <img className={`${styles.img}`} src={data.image_large} alt={data.name} />
          <p className="text text_type_main-default mt-4">{data.name}</p>
          <ul className={styles.list}>

            <li className={styles.listItem}>
              <span className="text text_type_main-default text_color_inactive">Калории, ккал</span>
              <span className="text text_type_digits-default mt-2">
                {data.calories}
              </span>
            </li>

            <li className={styles.listItem}>
              <span className="text text_type_main-default text_color_inactive">Белки, г</span>
              <span className="text text_type_digits-default mt-2">
                {data.proteins}
              </span>
            </li>

            <li className={styles.listItem}>
              <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
              <span className="text text_type_digits-default mt-2">
                {data.fat}
              </span>
            </li>

            <li className={styles.listItem}>
              <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
              <span className="text text_type_digits-default mt-2">
                {data.carbohydrates}
              </span>
            </li>

          </ul>
        {/* </div> */}
      </>
    );
  }

//   IngredientDetails.propTypes = {
//     data: ingredientType.isRequired
//   };

  export default IngredientDetails
