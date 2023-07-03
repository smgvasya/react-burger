import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../types/constants/burger-ingredients";

import { IngredientsActions } from "../actions/burger-ingredients";
import { IngredientTypes } from "../types/types";

type InitialStateType = {
  data: IngredientTypes[];
  loaded: boolean;
  error: boolean;
};

const initialState: InitialStateType = {
  data: [],
  loaded: false,
  error: false,
};

export const ingredientReducer = (
  state = initialState,
  action: IngredientsActions
) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        loaded: true,
        error: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loaded: false,
        error: false,
      };
    }
    case GET_INGREDIENTS_ERROR: {
      return {
        ...state,
        loaded: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
