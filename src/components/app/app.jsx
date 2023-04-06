import { useState, useEffect, useMemo } from "react";
import styles from "./app.module.css";

import { getIngredients } from "../services/actions/burger-ingredients";
import AppHeader from "../header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const { dataRequest } = useSelector((state) => state.ingredients.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      {dataRequest ? (
        <h1 className={`${styles.loading} text text_type_digits-large`}>
          Загрузка..
        </h1>
      ) : (
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      )}
    </>
  );
};

export default App;
