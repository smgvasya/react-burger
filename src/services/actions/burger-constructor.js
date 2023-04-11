import { v4 as uuidv4 } from "uuid";

export const INGREDIENT_CONSTRUCTOR_ADD = 'INGREDIENT_CONSTRUCTOR_ADD';
export const INGREDIENT_CONSTRUCTOR_DELETE = 'INGREDIENT_CONSTRUCTOR_DELETE';

export const addIngredient = (filling) => ({
  type: INGREDIENT_CONSTRUCTOR_ADD,
  payload: {
    ...filling,
    id: uuidv4(),
  },
});

export const deleteIngredient = (id) => ({
  type: INGREDIENT_CONSTRUCTOR_DELETE,
  payload: id,
});
