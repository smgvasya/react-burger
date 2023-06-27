import { v4 as uuidv4 } from "uuid";
import {
  INGREDIENT_CONSTRUCTOR_ADD,
  INGREDIENT_CONSTRUCTOR_REORDER,
  INGREDIENT_CONSTRUCTOR_DELETE,
  INGREDIENT_CONSTRUCTOR_RESET,
} from "../constants/burger-constructor";

import { IngredientTypes } from "../types/types";

export type IngredientConstructorAdd = {
  readonly type: typeof INGREDIENT_CONSTRUCTOR_ADD;
  readonly payload: IngredientTypes;
};

export type IngredientConstructorReorder = {
  readonly type: typeof INGREDIENT_CONSTRUCTOR_REORDER;
  payload: {
    from: number;
    to: number;
  };
};

export type IngredientConstructorDelete = {
  readonly type: typeof INGREDIENT_CONSTRUCTOR_DELETE;
  payload: string;
};

export type IngredientConstructorReset = {
  readonly type: typeof INGREDIENT_CONSTRUCTOR_RESET;
};

export type ConstructorActions =
  | IngredientConstructorAdd
  | IngredientConstructorReorder
  | IngredientConstructorDelete
  | IngredientConstructorReset;

export const addIngredient = (
  item: IngredientTypes
): IngredientConstructorAdd => ({
  type: INGREDIENT_CONSTRUCTOR_ADD,
  payload: {
    ...item,
    id: uuidv4(),
  },
});

export const deleteIngredient = (id: string): IngredientConstructorDelete => ({
  type: INGREDIENT_CONSTRUCTOR_DELETE,
  payload: id,
});

export const resetIngredient = (): IngredientConstructorReset => ({
  type: INGREDIENT_CONSTRUCTOR_RESET,
});

export const reorderIngredient = (
  dragIndex: number,
  dropIndex: number
): IngredientConstructorReorder => {
  return {
    type: INGREDIENT_CONSTRUCTOR_REORDER,
    payload: {
      from: dragIndex,
      to: dropIndex,
    },
  };
};
