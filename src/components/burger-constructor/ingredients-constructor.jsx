import { useMemo, useEffect, useState } from "react";
import styles from "./burger-constructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { deleteIngredient } from "../../services/actions/burger-constructor";

import { useDispatch, useSelector } from "react-redux";

const IngredientsConstructor = () => {
  const dispatch = useDispatch();

  const { bun, filling } = useSelector((store) => store.constructor);
  const { burgerStuff } = useSelector((store) => store.constructor);


  // const ingredients = useSelector((state) => state.ingredients.data);

  // const bun = ingredients.find((item) => item.type === "bun");

  // const filling = useMemo(
  //   () => ingredients.filter((item) => item.type !== "bun"),
  //   [ingredients]
  // );

  // const content = useMemo(
  //   (type) => burgerStuff.filter((item) => item.type === type),
  //   [burgerStuff]
  // );

  const onDelete = (id) => {
    dispatch(deleteIngredient(id));
  };

  return (
    <>
      {bun && (
        <div className="ml-8 mr-2">
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
      <ul className={filling && styles.ingredients}>
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
//       <h3 className={`${styles.empty} text text_type_main-large text_color_inactive `}>
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
