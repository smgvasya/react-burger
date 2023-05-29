import styles from "./ingredient.module.css";
import {IngredientDetails} from '../components/ingredient-details/ingredient-details';
import { Outlet } from 'react-router-dom';


export const IngredientPage = () => {

  return (
    <section className={styles.section}>
      <IngredientDetails />
    </section>
  )
}
