import styles from "./feed-order-info.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const OrderIngredient = ({ id, orderIndex, index, length }) => {
  const location = useLocation();
  const ingredients = useSelector((state) => state.ingredients.data);

  const ingredient = ingredients.find((item) => item._id === id);

  return (
    <div
      className={`${styles.ingredients}`}
      style={{
        zIndex: 6 - index,
        backgroundImage: `url(${ingredient.image_mobile})`,
      }}
      title={ingredient.name}
    >
      {length - 6 !== 0 && (
        <span className={`text text_type_digits-default ${styles.text}`}>
          {`+${length - 6}`}
        </span>
      )}
    </div>
  );
};

export const OrderIngredients = ({ id, index }) => {
  const ingredients = useSelector((state) => state.ingredients.data);

  const ingredient = ingredients.find((item) => item._id === id);

  return (
    <div
      className={`${styles.ingredients}`}
      style={{
        zIndex: 6 - index,
        backgroundImage: `url(${ingredient.image_mobile})`,
      }}
      title={ingredient.name}
    ></div>
  );
};
