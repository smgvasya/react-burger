import { useEffect } from "react";
import styles from "./app.module.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { getIngredients } from "../../services/actions/burger-ingredients";
import AppHeader from "../header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const loading = useSelector((state) => state.ingredients.loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      {loading ? (
        <h1 className={`${styles.loading} text text_type_digits-medium`}>
          Загрузка..
        </h1>
      ) : (
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}
    </>
  );
};

export default App;
