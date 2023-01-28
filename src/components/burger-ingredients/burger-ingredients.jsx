import { useState, useContext } from "react";
import PropTypes from "prop-types";

import { ingredientsPropTypes } from "../../utils/propTypes";
import styles from "./burger-ingredients.module.css";
import IngredientsTabs from "./ingredients-tabs";
import Ingredients from "./ingredients";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import { DataContext } from "../../utils/data-context";

const BurgerIngredients = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ingredients, setIngredients] = useState(null);
  const [currentTab, setCurrentTab] = useState("bun");
  const { data, setData } = useContext(DataContext);

  const handleOpenModal = (item) => {
    setIsOpen(true);
    setIngredients(item);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    const item = document.getElementById(tab);
    if (item) item.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pb-5 mt-10">Соберите бургер</h1>
      <IngredientsTabs setCurrent={handleTabClick} current={currentTab} />
      <div className={styles.ingredient}>
        <Ingredients
          type="bun"
          title="Булки"
          data={data}
          getData={handleOpenModal}
          id={"bun"}
        />
        <Ingredients
          type="sauce"
          title="Соусы"
          data={data}
          getData={handleOpenModal}
          id={"sause"}
        />
        <Ingredients
          type="main"
          title="Начинки"
          data={data}
          getData={handleOpenModal}
          id={"main"}
        />
      </div>
      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <IngredientDetails data={ingredients} />
        </Modal>
      )}
    </section>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
};

export default BurgerIngredients;
