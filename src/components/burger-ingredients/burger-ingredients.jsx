import { useState } from "react";

import styles from "./burger-ingredients.module.css";
import IngredientsTabs from "./ingredients-tabs";
import Ingredients from "./ingredients";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [ingredients, setIngredients] = useState(null);

  const handleOpenModal = (item) => {
    setModal(true);
    setIngredients(item);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pb-5 mt-10">Соберите бургер</h1>
      <IngredientsTabs />
      <div className={styles.ingredient}>
        <Ingredients
          type="bun"
          title="Булки"
          data={data}
          getData={handleOpenModal}
        />
        <Ingredients
          type="sauce"
          title="Соусы"
          data={data}
          getData={handleOpenModal}
        />
        <Ingredients
          type="main"
          title="Начинки"
          data={data}
          getData={handleOpenModal}
        />
      </div>
      {modal && (
        <Modal visible={handleCloseModal}>
          <IngredientDetails data={ingredients} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerIngredients;
