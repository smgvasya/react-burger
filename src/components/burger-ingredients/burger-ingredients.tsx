import { useEffect } from "react";
import { useDispatch } from "../../services/types/hooks";
import styles from "./burger-ingredients.module.css";
import IngredientsTabs from "./ingredients-tabs";
import Ingredients from "./ingredients";

import { activeTab } from "../../services/actions/tabs-ingredients";

const BurgerIngredients: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px 0px 150% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      dispatch(activeTab(entries[0].target.id));
    };

    const observer = new IntersectionObserver(callback, options);

    const buns = document.getElementById("bun") as HTMLElement;
    const sauces = document.getElementById("sauce") as HTMLElement;
    const main = document.getElementById("main") as HTMLElement;

    observer.observe(buns);
    observer.observe(sauces);
    observer.observe(main);

    return () => {
      observer.unobserve(buns);
      observer.unobserve(sauces);
      observer.unobserve(main);
    };
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pb-5 mt-10">Соберите бургер</h1>
      <IngredientsTabs />
      <div className={styles.ingredient} id="scrollArea">
        <Ingredients title="Булки" type="bun" id={"bun"} />
        <Ingredients title="Соусы" type="sauce" id={"sauce"} />
        <Ingredients title="Начинки" type="main" id={"main"} />
      </div>
    </section>
  );
};

export default BurgerIngredients;
