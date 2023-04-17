import { useMemo, forwardRef, useEffect, useRef } from "react";
import styles from "./burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { openIngredientDetails } from "../../services/actions/ingredient-details";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const Ingredients = forwardRef(({ title, type, getData, id }, ref) => {
  // const ref = useRef(null);
  const ingredients = useSelector((state) => state.ingredients.data);

  const content = useMemo(
    () => ingredients.filter((item) => item.type === type),
    [ingredients, type]
  );

  // const burger = useSelector((state) => state.constructor);

  // const counter = useMemo(() => {
  //   const {bun, filling} = burger
  //   const counter = {};
  //   filling.forEach((item) => {
  //     if (!counter[item._id]) counter[item._id] = 0; переслушать как тут
  //     counter[item._id]++;
  //   });
  //   if (bun) counter[bun._id] = 2;
  //   return counter;
  // }, [burger]);
  // count={ingredientCount[item._id]}
  // id = {titleId}


  return (
    <>
      <h2 className="text text_type_main-medium pb-6 pt-10" id={id}>
        {title}
      </h2>
      <ul className={styles.list} >
        {content.map((item) => (
          <li
            className={`mr-1 ${styles.item}`}
            type={type}
            ref = {ref}
            key={item._id}
            onClick={() => {
              getData(item);
            }}

          >
            <Counter count={1} size="default" extraClass="m-1" />
            <img className="pr-4 pb-1 pl-4" src={item.image} alt={item.name} />
            <div className={styles.price}>
              <span className="pt-1 pb-1 text text_type_digits-default">
                {item.price}
              </span>
              <CurrencyIcon type="primary" />
            </div>
            <p
              className={`pt-1 pb-1 text text text_type_main-small ${styles.name}`}
            >
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
});

Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Ingredients;
