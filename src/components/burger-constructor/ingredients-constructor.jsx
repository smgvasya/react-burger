import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import styles from "./burger-constructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  deleteIngredient,
  INGREDIENT_CONSTRUCTOR_REORDER,
} from "../../services/actions/burger-constructor";

import { useDispatch, useSelector } from "react-redux";

const FillingConstructor = ({ item, index }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { bun, filling } = useSelector((store) => store.constructor);
  const { burgerStuff } = useSelector((store) => store.constructor);

  // const ingredients = useSelector((state) => state.ingredients.data);

  const [{ isDragging }, drag] = useDrag({
    type: "ingredient",
    item: () => {
      return { item, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "ingredient",
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      dispatch({
        type: INGREDIENT_CONSTRUCTOR_REORDER,
        payload: {
          from: dragIndex,
          to: hoverIndex,
        },
      });
      item.index = hoverIndex;
    },
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const onDelete = (id) => {
    dispatch(deleteIngredient(id));
  };

  return (
    <>
      <li
        className={`${styles.list} mb-4 mr-2`}
        style={{ opacity }}
        // data-handler-id={handlerId}
        ref={ref}
        // key={item.id}
      >
        <DragIcon type="primary" />
        <ConstructorElement
          isLocked={false}
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          // key={item.id}
          handleClose={() => onDelete()}
          // onDelete(item.id)
        />
      </li>
    </>
  );
};

const IngredientsConstructor = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { bun, filling } = useSelector((store) => store.constructor);
  const { burgerStuff } = useSelector((store) => store.constructor);

  // const ingredients = useSelector((state) => state.ingredients.data);

  // const dragBuns = canDrop && dragItem && dragItem.type === "bun"; фильтр проверка,
  // если массив булок меньше нуля, то выводим сообщение. 0:06:47
  // const dragIngredients = canDrop && dragItem && dragItem.type !== "bun"; фильтр проверка,
  // если массив соусов и начинок меньше нуля, то выводим сообщение. 0:06:47

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
          filling.map((item, index) => (
            <FillingConstructor item={item} index={index} key={item.id} />
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

// const [{ handlerId }, drop] = useDrop({
//   accept: ["ingredient"],
//   collect(monitor) {
//     return {
//       handlerId: monitor.getHandlerId(),
//     };
//   },
//   hover(item, monitor) {
//     const dragIndex = item.index;
//     const hoverIndex = index;
//     // if (dragIndex === hoverIndex) {
//     //   return;
//     // }
//     const hoverBoundingRect = ref.current?.getBoundingClientRect();
//     const hoverMiddleY =
//       (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
//     const clientOffset = monitor.getClientOffset();
//     const hoverClientY = clientOffset.y - hoverBoundingRect.top;

//     if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//       return;
//     }
//     if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//       return;
//     }

//     dispatch({
//       type: INGREDIENT_CONSTRUCTOR_REORDER,
//       payload: {
//         from: dragIndex,
//         to: hoverIndex,
//       },
//     });
//     item.index = hoverIndex;
//   },
// });

// const [{ isDragging }, drag] = useDrag({
//   type: "ingredient",
//   item: () => {
//     return { item, index };
//   },
//   collect: (monitor) => ({
//     isDragging: monitor.isDragging(),
//   }),
// });

// const opacity = isDragging ? 0 : 1;
// drag(drop(ref));
