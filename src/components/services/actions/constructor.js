import { v4 as uuidv4 } from "uuid";

export const INGREDIENT_CONSTRUCTOR_ADD = "INGREDIENT_CONSTRUCTOR_ADD";
export const INGREDIENT_CONSTRUCTOR_DELETE = "INGREDIENT_CONSTRUCTOR_DELETE";

export const addIngredientConstructor = (ingredient) => ({
  type: INGREDIENT_CONSTRUCTOR_ADD,
  payload: {
    ...ingredient,
    id: uuidv4(),
  },
});
