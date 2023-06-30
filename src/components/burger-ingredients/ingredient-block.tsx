import { useMemo } from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "../../services/types/hooks";
import { Link, useLocation } from "react-router-dom";
import { IngredientTypes } from "../../services/types/types";

import styles from "./burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

type TPropsType = {
  items: IngredientTypes;
  type: string;
};

const IngredientBlock: React.FC<TPropsType> = ({ items, type }) => {
  const { bun, fillings } = useSelector((state) => state.burgerConstructor);
  const location = useLocation();

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
      <Link
        to={`/ingredients/${items._id}`}
        className={`mr-1 ${styles.item}`}
        type={items.type}
        key={items._id}
        state={{ background: location }}
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
      </Link>
    </>
  );
};

export default IngredientBlock;
