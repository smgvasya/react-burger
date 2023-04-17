import { v4 as uuidv4 } from "uuid";

export const INGREDIENT_CONSTRUCTOR_ADD = 'INGREDIENT_CONSTRUCTOR_ADD';
export const INGREDIENT_CONSTRUCTOR_DELETE = 'INGREDIENT_CONSTRUCTOR_DELETE';
export const INGREDIENT_CONSTRUCTOR_REORDER = 'INGREDIENT_CONSTRUCTOR_REORDER';


export const addIngredient = (ingredient) => ({
  type: INGREDIENT_CONSTRUCTOR_ADD,
  payload: {
    ...ingredient,
    id: uuidv4(),
  },
});

export const deleteIngredient = (id) => ({
  type: INGREDIENT_CONSTRUCTOR_DELETE,
  payload: id,
});

// export const deleteIngredient = (index) => ({
//   type: INGREDIENT_CONSTRUCTOR_DELETE,
//   payload: index,
// });


  // const [{canDrop, dragItem}, drop] = useDrop(()=>({
  //   accept: "ADD_INGREDIENT",
  //   drop: (item) => dispatch(addToConstructor(item)),
  //   collect: (monitor) => ({
  //     canDrop: monitor.canDrop(),
  //     dragItem:monitor.getItem(),
  //     isOver: monitor.isOver(),
  //   }),
  // }));
  // const dragBuns = canDrop && dragItem && dragItem.type === "bun"; фильтр проверка,
  // если массив булок меньше нуля, то выводим сообщение. 0:06:47
  // const dragIngredients = canDrop && dragItem && dragItem.type !== "bun"; фильтр проверка,
  // если массив соусов и начинок меньше нуля, то выводим сообщение. 0:06:47
