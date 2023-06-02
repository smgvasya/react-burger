import styles from "./ingredient.module.css";
import {IngredientDetails} from '../components/ingredient-details/ingredient-details';



export const IngredientPage = () => {


  return (
    <section className={styles.section}>
      <IngredientDetails />
    </section>
  )
}
