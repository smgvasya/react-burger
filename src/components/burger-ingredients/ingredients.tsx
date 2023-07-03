import React from "react";
import { useMemo } from "react";
import { useSelector } from "../../services/types/hooks";
import styles from "./burger-ingredients.module.css";

import IngredientBlock from "./ingredient-block";

type TPropsType = {
  title: string;
  type: string;
  id: string;
};

const Ingredients: React.FC<TPropsType> = ({ title, id, type }) => {
  const ingredients = useSelector((state) => state.ingredients.data);

  const content = useMemo(
    () => ingredients.filter((item) => item.type === type),
    [ingredients, type]
  );

  return (
    <>
      <h2 className="text text_type_main-medium pb-6 pt-10" id={id}>
        {title}
      </h2>
      <ul className={styles.list}>
        {content.map((item) => (
          <IngredientBlock type={type} items={item} key={item._id} />
        ))}
      </ul>
    </>
  );
};

export default Ingredients;
