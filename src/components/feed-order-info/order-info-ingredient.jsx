import styles from "./feed-order-info.module.css";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const OrderIngredient = ({ id, index, length }) => {
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

OrderIngredient.propTypes = {
  id: PropTypes.node.isRequired,
  length: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
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

OrderIngredients.propTypes = {
  id: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
};
