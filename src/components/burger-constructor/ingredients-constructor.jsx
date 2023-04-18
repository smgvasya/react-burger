import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import styles from "./burger-constructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { reorderIngredient } from "../../services/actions/burger-constructor";

import { useDispatch, useSelector } from "react-redux";

const IngredientsConstructor = ({ item, index, handleClose }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const { fillings } = useSelector((state) => state.constructor.fillings);

  const [{ handlerId }, drop] = useDrop({
    accept: "ingredient",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
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

      dispatch(reorderIngredient(dragIndex, hoverIndex, fillings));
      item.index = hoverIndex;
    },
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
        data-handler-id={handlerId}
        ref={ref}
      >
        <DragIcon type="primary" />
        <ConstructorElement
          // isLocked={false}
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          handleClose={handleClose}
        />
      </li>
    </>
  );
};

export default IngredientsConstructor;
