import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./burger-ingredients.module.css";
import IngredientsTabs from "./ingredients-tabs";
import Ingredients from "./ingredients";
import {
  INGREDIENT_DETAILS_CLOSE,
  INGREDIENT_DETAILS_OPEN,
} from "../../components/services/actions/ingredient-details";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState("bun");

  const dispatch = useDispatch();

  // const ingredients = useSelector((state) => state.ingredients.data);
  const ingredientsModal = useSelector((state) => state.ingredientDetails.data);

  const handleCloseModal = () => {
    dispatch({ type: INGREDIENT_DETAILS_CLOSE });
  };

  const handleOpenModal = (ingredient) => {
    dispatch({ type: INGREDIENT_DETAILS_OPEN, payload: ingredient });
  };

  const handleTabClick = (id) => {
    setCurrentTab(id);
    const item = document.getElementById(id);
    item.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pb-5 mt-10">Соберите бургер</h1>
      <IngredientsTabs setCurrent={handleTabClick} current={currentTab} />
      <div className={styles.ingredient}>
        <Ingredients
          type="bun"
          title="Булки"
          id={"bun"}
          getData={handleOpenModal}
        />
        <Ingredients
          type="sauce"
          title="Соусы"
          id={"sause"}
          getData={handleOpenModal}
        />
        <Ingredients
          type="main"
          title="Начинки"
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
