import styles from "./feed-details.module.css";
import { useSelector } from "react-redux";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const FeedDetailsImg = ({ id, count }) => {
  const ingredients = useSelector((state) => state.ingredients.data);

  const ingredient = ingredients.find((item) => item._id === id);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${ingredient.image})` }}
        className={styles.ingredientImg}
      />
      <p className="text text_type_main-default">{ingredient.name}</p>
      <div className={styles.ingredientPrice}>
        <p className="text text_type_digits-default">{`${count} x ${ingredient.price}`}</p>
        <CurrencyIcon type="primary" />
      </div>
    </>
  );
};
