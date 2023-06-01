import styles from "./feed-order-info.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const OrderInfoIngredient = () => {
  const location = useLocation();
  const ingredients = useSelector((state) => state.ingredients.data);

  // const ingredient = ingredients.find(item => item._id === id)

  const ingredientCounts = {};
  const ingredientsMarkup = useMemo(() => {
    return Object.entries(ingredientCounts).map(([ingredientId, count]) => {
      const ingredient = ingredients.find((item) => item._id === ingredientId);
      if (!ingredient) return null;

      return (
        <OrderImage
          key={ingredientId}
          alt={ingredient.name}
          image={ingredient.image}
          count={count > 1 ? `+${count}` : ""}
        />
      );
    });
  }, [ingredients]);

  return <ul className={styles.list}>{ingredientsMarkup}</ul>;
};

const OrderImage = ({ name, image, count, extraCountClass }) => {
  return (
    <div className={`${styles.box}`}>
      <img src={image} alt={name} className={styles.image}></img>
      {count > 1 && (
        <span
          className={`${styles.count} ${extraCountClass} text text_type_digits-default`}
        >
          {`${count}`}
        </span>
      )}
    </div>
  );
};

// export const OrderInfo = ({ ingredients }) => {

// const testerbl = useMemo(() => {
//   return ingredients.map((item, index) => {
//   if (index === 5) {
//     return (
//       <li className={styles.item} style={{ zIndex: 20 - index }} key={item._id + index}>
//         <img className={styles.image} src={item.image_mobile} alt={item.name} />
//         {ingredients.length - 6 === 0 && (
//           <p className={`${styles.text} text text_type_digits-default`}>{`+${ingredients.length - 6}`}</p>
//         )}
//       </li>
//     )
//   } else if (index < 5) {
//     return (
//       <li className={styles.item} style={{ zIndex: 20 - index }}key={item._id + index}>
//         <img className={styles.image} src={item.image_mobile} alt={item.name} />
//         {/* {showMore && (
//           <p className={`${styles.text} text text_type_digits-default`}>{`+${ingredients.length - 6}`}</p>
//         )} */}
//       </li>
//     )
//   }

//   return
// })
// }, [ingredients])

//   return (
//     <ul className={styles.list}>
//      {testerbl}
//     </ul>
//   )
//   }
