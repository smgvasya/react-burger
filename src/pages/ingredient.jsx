import {IngredientDetails} from '../components/ingredient-details/ingredient-details';
import styles from './ingredient.module.css';

export const IngredientPage = () => {
  return (
    <section className={styles.section}>
      <IngredientDetails />
    </section>
  )
}

