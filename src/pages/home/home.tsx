import styles from "./home.module.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { Loader } from "../../components/loader/loader";
import { useSelector } from "../../services/types/hooks";

export const HomePage: React.FC = () => {
  const loading = useSelector((state) => state.ingredients.loaded);
  const loadingOrder = useSelector((state) => state.order.loaded);

  return (
    <main className={styles.main}>
      {loading || loadingOrder ? (
        <Loader />
      ) : (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      )}
    </main>
  );
};
