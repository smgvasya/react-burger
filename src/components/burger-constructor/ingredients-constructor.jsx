import { useMemo, useContext, useEffect, useState } from "react";
import styles from "./burger-constructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { TotalPriceContext } from "../../contexts/ingredients-context";

import { DataContext } from "../../contexts/data-context";

const IngredientsConstructor = () => {
  const { setTotalPrice } = useContext(TotalPriceContext);
  const { data } = useContext(DataContext);


  const burgerBun = data.find((item) => item.type === "bun");

  const constituent = useMemo(
    () => data.filter((item) => item.type !== "bun"),
    [data]
  );

  useEffect(() => {
    let total = 0;
    constituent.map((item) => (total += item.price));
    setTotalPrice(total + burgerBun.price * 2);
  }, [burgerBun.price, constituent, data, setTotalPrice]);

  return (
    <>
      <div className="ml-8 mr-2 mb-4">
        <ConstructorElement
          type="top"
          isLocked={true}
          text={burgerBun.name + " (верх)"}
          price={burgerBun.price}
          thumbnail={burgerBun.image}
          key={burgerBun._id}
        />
      </div>

      <ul className={styles.ingredients}>
        {constituent.map((item) => (
          <li className={`${styles.list} mb-4 mr-2`} key={item._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              isLocked={false}
              text={item.name}
              price={item.price}
              thumbnail={item.image}
              key={item._id}
            />
          </li>
        ))}
      </ul>
      <div className="ml-8 mr-2">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={burgerBun.name + " (низ)"}
          price={burgerBun.price}
          thumbnail={burgerBun.image}
          key={burgerBun._id}
        />
      </div>
    </>
  );
};

export default IngredientsConstructor;
