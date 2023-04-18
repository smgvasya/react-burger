import { useMemo } from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import styles from "./burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";

const IngredientBlock = ({ items, onClick, type }) => {
  const [{ opacity }, dragRef] = useDrag({
    type: "ITEM",
    item: { ...items },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });

  // const burger = useSelector((state) => state.constructor);

  // const counter = useMemo(() => { возможно переместить вниз
  //   const {bun, filling} = burger
  //   const counter = {};
  //   filling.forEach((item) => {
  //     if (!counter[item._id]) counter[item._id] = 0; задать ноль в коде ретёрна
  //     counter[item._id]++;
  //   });
  //   if (bun) counter[bun._id] = 2;
  //   return counter;
  // }, [burger]);
  // count={counter[item._id]}
  // id = {titleId}


  return (
    <>
      <li
        className={`mr-1 ${styles.item}`}
        type={type}
        ref={dragRef}
        style={{ opacity }}
        key={items._id}
        onClick={onClick}
      >
        <Counter count={1} size="default" extraClass="m-1" />
        <img className="pr-4 pb-1 pl-4" src={items.image} alt={items.name} />
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

const Ingredients = ({ title, getData, id, type }) => {
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
            onClick={() => {
              getData(item);
            }}
          />
        ))}
      </ul>
    </>
  );
};

Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Ingredients;
