import styles from "./ingredient.module.css";
import {IngredientDetails} from '../components/ingredient-details/ingredient-details';
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export const IngredientPage = () => {

  return (
    <section className={styles.section}>
      <IngredientDetails />
    </section>
  )
}
