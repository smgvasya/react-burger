import React from "react";
import styles from "./feed-order-info.module.css";
import { useSelector } from "../../services/types/hooks";

type TPropsType = {
  id: string;
  index: number;
  length: number;
};

export const OrderIngredient: React.FC<TPropsType> = ({
  id,
  index,
  length,
}) => {
  const ingredients = useSelector((state) => state.ingredients.data);

  const ingredient = ingredients.find((item) => item._id === id);

  return (
    <div
      className={`${styles.ingredients}`}
      style={{
        zIndex: 6 - index,
        backgroundImage: `url(${ingredient?.image_mobile})`,
      }}
      title={ingredient?.name}
    >
      {length - 6 !== 0 && (
        <span className={`text text_type_digits-default ${styles.text}`}>
          {`+${length - 6}`}
        </span>
      )}
    </div>
  );
};

type TPropsIngredientsType = {
  id: string;
  index: number;
};
export const OrderIngredients: React.FC<TPropsIngredientsType> = ({
  id,
  index,
}) => {
  const ingredients = useSelector((state) => state.ingredients.data);

  const ingredient = ingredients.find((item) => item._id === id);

  return (
    <div
      className={`${styles.ingredients}`}
      style={{
        zIndex: 6 - index,
        backgroundImage: `url(${ingredient?.image_mobile})`,
      }}
      title={ingredient?.name}
    ></div>
  );
};
