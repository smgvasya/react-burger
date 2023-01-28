import { useState, useEffect, useReducer } from "react";
import styles from "./app.module.css";
import { getIngredients } from "../../utils/api";
import AppHeader from "../header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {
  IngredientsContext,
  TotalPriceContext,
} from "../../utils/ingredients-context";

import { DataContext } from "../../utils/data-context";

// const totalPriceInitialState = { count: 0 };

// функция-редьюсер
// изменяет состояния в зависимости от типа переданного action
// function reducer(state, action) {
//   switch (action.type) {
//     case "increase":
//       return { count: state.count + 1 };
//     case "decrease":
//       return { count: state.count - 1 };
//     default:
//       throw new Error(`Wrong type of action: ${action.type}`);
//   }
// }

const App = () => {
  const [data, setData] = useState([null]);
  const [isLoading, setIsLoading] = useState(true);

  const [totalPrice, setTotalPrice] = useState(0);

  // const handleIncrementClick = () => {
  //   // при вызове dispatch достаточно указать тип действия
  //   setTotalPriceDispatcher({ type: "increase" });
  // };

  // const handleDecrementClick = () => {
  //   setTotalPriceDispatcher({ type: "decrease" });
  // };

  useEffect(() => {
    getIngredients()
      .then((res) => setData(res.data))
      .catch((err) => console.log(`При загрузке произошла ошибка: ${err}`))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <AppHeader />
      {isLoading ? (
        <h1 className={`${styles.loading} text text_type_digits-large`}>
          Загрузка..
        </h1>
      ) : (
        <main className={styles.main}>
          <DataContext.Provider value={{ data, setData }}>
            <BurgerIngredients />
            <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
              <BurgerConstructor />
            </TotalPriceContext.Provider>
          </DataContext.Provider>
        </main>
      )}
    </>
  );
};

export default App;
