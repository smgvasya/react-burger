import { getIngredientsList } from "../../utils/api";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../types/constants/burger-ingredients";

import { IngredientTypes } from "../types/types";
import { AppDispatch, AppThunk } from "../types/index";

export type GetIngredientsRequestType = {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
};

export type GetIngredientsSuccessType = {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: IngredientTypes[];
};

export type GetIngredientsErrorType = {
  readonly type: typeof GET_INGREDIENTS_ERROR;
};

export type IngredientsActions =
  | GetIngredientsRequestType
  | GetIngredientsSuccessType
  | GetIngredientsErrorType;

export const getIngredients: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(ingredientRequest());

  getIngredientsList()
    .then((res) => dispatch(ingredientSuccess(res.data)))
    .catch(() => dispatch(ingredientError()));
};

export const ingredientRequest = () => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const ingredientSuccess = (data: IngredientTypes[]) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: data,
});

export const ingredientError = () => ({
  type: GET_INGREDIENTS_ERROR,
});
