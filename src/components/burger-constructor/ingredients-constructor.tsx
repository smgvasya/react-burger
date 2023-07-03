import React from "react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "../../services/types/hooks";
import styles from "./burger-constructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { reorderIngredient } from "../../services/actions/burger-constructor";

import {IngredientTypes} from "../../services/types/types"

type TPropsType = {
  item: IngredientTypes;
  index: number;
  handleClose: Function;
}

const IngredientsConstructor: React.FC<TPropsType> = ({ item, index, handleClose }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLLIElement>(null);

  const [, drop] = useDrop({
    accept: "ingredient",
    hover(item: { index: number }, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = hoverBoundingRect ? (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2 : 0;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset && hoverBoundingRect) ? clientOffset.y - hoverBoundingRect.top : 0;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      dispatch(reorderIngredient(dragIndex, hoverIndex));
      item.index = hoverIndex;
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  const [{ isDragging }, drag] = useDrag({
    type: "ingredient",
    item: () => {
      return { item, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <>
      <li
        className={`${styles.list} mb-4 mr-2`}
        style={{ opacity }}
        ref={ref}
      >
        <DragIcon type="primary" />
        <ConstructorElement
          isLocked={false}
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          handleClose={() => handleClose(item.id)}
        />
      </li>
    </>
  );
};


export default IngredientsConstructor;
