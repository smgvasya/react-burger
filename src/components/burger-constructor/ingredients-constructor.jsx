import { useMemo, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./burger-constructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { INGREDIENT_CONSTRUCTOR_DELETE } from "../services/actions/constructor";

import { useDispatch, useSelector } from "react-redux";

const IngredientsConstructor = () => {
  // const { setTotalPrice } = useContext(TotalPriceContext);
  // const { data } = useContext(DataContext);

  const constructorBurger = useSelector((state) => state.constructor);
  const dispatch = useDispatch();
  // const ingredients = useSelector((state) => state.ingredients.data);

  // const bun = constructorBurger.find((item) => item.type === "bun");

  // const filling = useMemo(
  //   () => constructorBurger.filter((item) => item.type !== "bun"),
  //   [constructorBurger]
  // );

  const onDelete = (id) => {
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_DELETE,
      id,
    });
  };

  return (
    <>
      { constructorBurger.ingredients.length === 0 && (
        <h3 className="text text_type_main-medium text_color_inactive">
          Перетащите булку и начинки
        </h3>
      )}
      {constructorBurger.bun && (
        <div className="ml-8 mr-2 mb-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={constructorBurger.bun.name + " (верх)"}
            price={constructorBurger.bun.price}
            thumbnail={constructorBurger.bun.image}
            key={constructorBurger.bun.id}
          />
        </div>
      )}

      <ul className={styles.ingredients}>
        {constructorBurger.ingredients.length > 0 &&
          constructorBurger.ingredients.map((item) => (
            <li className={`${styles.list} mb-4 mr-2`} key={item._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                isLocked={false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                index = {item.index}
                key={item.id}
                handleClose={onDelete}
              />
            </li>
          ))}
      </ul>

      {constructorBurger.bun && (
        <div className="ml-8 mr-2">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={constructorBurger.bun.name + " (низ)"}
            price={constructorBurger.bun.price}
            thumbnail={constructorBurger.bun.image}
            key={uuidv4()}
          />
        </div>
      )}
    </>
  );
};

export default IngredientsConstructor;

// return (
//   <>
//     {!constructorBurger.length && (
//       <h3 className="text text_type_main-medium text_color_inactive">
//         Перетащите булку и начинки
//       </h3>
//     )}

//       <div className="ml-8 mr-2 mb-4">
//         <ConstructorElement
//           type="top"
//           isLocked={true}
//           text={bun.name + " (верх)"}
//           price={bun.price}
//           thumbnail={bun.image}
//           key={uuidv4()}
//         />
//       </div>

//       <ul className={styles.ingredients}>
//         {filling.map((item) => (
//           <li className={`${styles.list} mb-4 mr-2`} key={item._id}>
//             <DragIcon type="primary" />
//             <ConstructorElement
//               isLocked={false}
//               text={item.name}
//               price={item.price}
//               thumbnail={item.image}
//               key={item._id}
//               handleClose={onDelete}
//             />
//           </li>
//         ))}
//       </ul>

//       <div className="ml-8 mr-2">
//         <ConstructorElement
//           type="bottom"
//           isLocked={true}
//           text={bun.name + " (низ)"}
//           price={bun.price}
//           thumbnail={bun.image}
//           key={bun._id}
//         />
//       </div>

//   </>
// );
// };
