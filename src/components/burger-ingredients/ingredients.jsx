import { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./burger-ingredients.module.css";

import IngredientBlock from "./ingredient-block";


import PropTypes from "prop-types";

const Ingredients = ({ title, id, type }) => {
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
          <IngredientBlock
            type={type}
            items={item}
            key={item._id}

          />
        ))}
      </ul>
    </>
  );
};

Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Ingredients;
