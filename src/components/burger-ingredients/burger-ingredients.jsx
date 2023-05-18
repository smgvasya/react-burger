import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./burger-ingredients.module.css";
import IngredientsTabs from "./ingredients-tabs";
import Ingredients from "./ingredients";
import {
  detailsClose,
  detailsOpen,
} from "../../services/actions/ingredient-details";
import { activeTab } from "../../services/actions/tabs-ingredients";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = () => {
  const dispatch = useDispatch();

  const ingredientsModal = useSelector((state) => state.ingredientDetails.data);

  const handleCloseModal = () => {
    dispatch(detailsClose());
  };

  const handleOpenModal = (ingredient) => {
    dispatch(detailsOpen(ingredient));
  };

  useEffect(() => {
    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px 0px 150% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      dispatch(activeTab(entries[0].target.id));
    }, options);

    const buns = document.getElementById("bun");
    const sauces = document.getElementById("sauce");
    const main = document.getElementById("main");

    observer.observe(buns);
    observer.observe(sauces);
    observer.observe(main);

    return () => {
      observer.unobserve(buns)
      observer.unobserve(sauces)
      observer.unobserve(main);
    };
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pb-5 mt-10">Соберите бургер</h1>
      <IngredientsTabs />
      <div className={styles.ingredient} id="scrollArea">
        <Ingredients
          title="Булки"
          id={"bun"}
          type="bun"
          getData={handleOpenModal}
        />
        <Ingredients
          title="Соусы"
          type="sauce"
          id={"sauce"}
          getData={handleOpenModal}
        />
        <Ingredients
          title="Начинки"
          type="main"
          id={"main"}
          getData={handleOpenModal}
        />
      </div>
      {ingredientsModal && (
        <Modal onClose={handleCloseModal}>
          <IngredientDetails data={ingredientsModal} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerIngredients;
