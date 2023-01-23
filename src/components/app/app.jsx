import { useState, useEffect } from "react";
import styles from "./app.module.css";
import getApi from "../../utils/api";
import AppHeader from "../header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const App = () => {
  const baseUrl = "https://norma.nomoreparties.space/api/ingredients";

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getApi(baseUrl)
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
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </main>
      )}
    </>
  );
};

export default App;
