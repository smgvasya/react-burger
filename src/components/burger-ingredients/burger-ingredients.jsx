import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrag } from "react-dnd";
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
  const ingredients = useSelector((state) => state.ingredients.data);

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
    const sauces = document.getElementById("sause");
    const main = document.getElementById("main");

    observer.observe(buns);
    observer.observe(sauces);
    observer.observe(main);

  }, [dispatch]);


  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: { ...ingredients },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0 : 1
    })
  });

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pb-5 mt-10">Соберите бургер</h1>
      <IngredientsTabs />
      <div className={styles.ingredient} id="scrollArea">
        <Ingredients
          type="bun"
          title="Булки"
          id={"bun"}
          ref={dragRef}
          style={{ opacity }}
          getData={handleOpenModal}
        />
        <Ingredients
          type="sauce"
          title="Соусы"
          id={"sause"}
          ref={dragRef}
          style={{ opacity }}
          getData={handleOpenModal}
        />
        <Ingredients
          type="main"
          title="Начинки"
          id={"main"}
          ref={dragRef}
          style={{ opacity }}
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
