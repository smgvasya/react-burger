import { v4 as uuidv4 } from "uuid";
// import {
//   INGREDIENT_CONSTRUCTOR_ADD,
//   INGREDIENT_CONSTRUCTOR_REORDER,
//   INGREDIENT_CONSTRUCTOR_DELETE,
//   INGREDIENT_CONSTRUCTOR_RESET,
// } from '../constants/burger-constructor';

export const INGREDIENT_CONSTRUCTOR_ADD = "INGREDIENT_CONSTRUCTOR_ADD";
export const INGREDIENT_CONSTRUCTOR_DELETE = "INGREDIENT_CONSTRUCTOR_DELETE";
export const INGREDIENT_CONSTRUCTOR_REORDER = "INGREDIENT_CONSTRUCTOR_REORDER";
export const INGREDIENT_CONSTRUCTOR_RESET = "INGREDIENT_CONSTRUCTOR_RESET";

export const addIngredient = (item) => ({
  type: INGREDIENT_CONSTRUCTOR_ADD,
  payload: {
    ...item,
    id: uuidv4(),
  },
});

export const deleteIngredient = (id) => ({
  type: INGREDIENT_CONSTRUCTOR_DELETE,
  payload: id,
});

export const resetIngredient = () => ({
  type: INGREDIENT_CONSTRUCTOR_RESET,

});

export const reorderIngredient = (dragIndex, dropIndex) => {
  return {
    type: INGREDIENT_CONSTRUCTOR_REORDER,
    payload: {
      from: dragIndex,
      to: dropIndex,
    },
  };
};
