import styles from "./ingredient-details.module.css";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const IngredientDetails = () => {
  const { data } = useSelector((state) => state.ingredients);
  const { id } = useParams();
  const item = useMemo(() => {
    if (data.length === 0) {
      return undefined;
    }
    data.find((item) => item._id === id);
  }, [data, id]);

  return (
    item && (
      <>
        <h1 className={`${styles.text} text text_type_main-large pt-10`}>
          Детали ингредиента
        </h1>
        <div className={styles.container}>
          <img className="pb-4" src={item.image_large} alt={item.name} />
          <p className="text text_type_main-default pb-8">{item.name}</p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span className="text text_type_main-default text_color_inactive">
                Калории, ккал
              </span>
              <span className="text text_type_digits-default pt-2">
                {item.calories}
              </span>
            </li>

            <li className={styles.item}>
              <span className="text text_type_main-default text_color_inactive">
                Белки, г
              </span>
              <span className="text text_type_digits-default pt-2">
                {item.proteins}
              </span>
            </li>

            <li className={styles.item}>
              <span className="text text_type_main-default text_color_inactive">
                Жиры, г
              </span>
              <span className="text text_type_digits-default pt-2">
                {item.fat}
              </span>
            </li>

            <li className={styles.item}>
              <span className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </span>
              <span className="text text_type_digits-default pt-2">
                {item.carbohydrates}
              </span>
            </li>
          </ul>
        </div>
      </>
    )
  );
};
