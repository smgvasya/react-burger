import styles from "./ingredient.module.css";
import {IngredientDetails} from '../components/ingredient-details/ingredient-details';

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getIngredients } from '../services/actions/burger-ingredients';

export const IngredientPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <IngredientDetails />
    </section>
  )
}
