import { useMemo } from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

import styles from "./burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { ingredientsPropTypes } from "../../utils/propTypes";
import PropTypes from "prop-types";

const IngredientBlock = ({ items, onClick, type }) => {
  const { bun, fillings } = useSelector((state) => state.burgerConstructor);

  const [{ opacity }, dragRef] = useDrag({
    type: "item",
    item: { ...items },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });

  const countIngredient = useMemo(() => {
    return items.type !== "bun"
      ? fillings.reduce(
          (sum, item) => (item._id === items._id ? sum + 1 : sum),
          0
        )
      : bun?._id === items._id
      ? 2
      : 0;
  }, [bun?._id, fillings, items._id, items.type]);

  return (
    <>
      <li
        className={`mr-1 ${styles.item}`}
        type={type}
        key={items._id}
        onClick={onClick}
      >
        {countIngredient !== 0 && (
          <Counter count={countIngredient} size="default" extraClass="m-1" />
        )}

        <img
          className="pr-4 pb-1 pl-4"
          src={items.image}
          alt={items.name}
          ref={dragRef}
          style={{ opacity }}
        />
        <div className={styles.price}>
          <span className="pt-1 pb-1 text text_type_digits-default">
            {items.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <p
          className={`pt-1 pb-1 text text text_type_main-small ${styles.name}`}
        >
          {items.name}
        </p>
      </li>
    </>
  );
};

IngredientBlock.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  items: ingredientsPropTypes.isRequired,
};

export default IngredientBlock;
