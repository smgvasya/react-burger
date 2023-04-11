import { useMemo, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./burger-constructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { INGREDIENT_CONSTRUCTOR_DELETE } from "../../services/actions/burger-constructor";

import { useDispatch, useSelector } from "react-redux";

const IngredientsConstructor = () => {
  // const { setTotalPrice } = useContext(TotalPriceContext);
  // const { data } = useContext(DataContext);
  const dispatch = useDispatch();

  const bun = useSelector((state) => state.constructor.bun);
  const filling = useSelector((state) => state.constructor.filling);
  //const ingredients = useSelector((state) => state.ingredients.data);

  //const constructorBurger = useSelector((state) => state.constructor);

  // const ingredients = useSelector((state) => state.ingredients.data);

  // const bun = buns.find((item) => item.type === "bun");

  // const filling = useMemo(
  //   () => fillings.filter((item) => item.type !== "bun"),
  //   [fillings]
  // );

  // const content = useMemo(
  //   () => ingredients.filter((item) => item.type === type),
  //   [ingredients, type]
  // );

  const onDelete = (id) => {
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_DELETE,
      id,
    });
  };

  return (
    <>
      {bun === 0 && (
        <h3 className="text text_type_main-medium text_color_inactive">
          Перетащите булку
        </h3>
      )}
      {bun && (
        <div className="ml-8 mr-2 mb-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name + " (верх)"}
            price={bun.price}
            thumbnail={bun.image}
            key={bun.id}
          />
        </div>
      )}

      <ul className={styles.ingredients}>
        {filling &&
          filling.map((item) => (
            <li className={`${styles.list} mb-4 mr-2`} key={item._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                isLocked={false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                index={item.index}
                key={item.id}
                handleClose={onDelete}
              />
            </li>
          ))}
      </ul>

      {bun && (
        <div className="ml-8 mr-2">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name + " (низ)"}
            price={bun.price}
            thumbnail={bun.image}
            key={bun.id}
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
