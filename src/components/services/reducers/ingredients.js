import {
  // INCREASE_INGREDIENT,
  // DECREASE_INGREDIENT,
  // DELETE_INGREDIENT,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../actions/ingredients.js";

// import { TAB_SWITCH } from "../actions/index.js";

const initialState = {
  data: [],
  dataRequest: false,
  dataError: null,
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        dataRequest: true,
        dataError: null,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        dataRequest: false,
        dataError: null,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        dataRequest: false,
        dataError: true,
      };
    }
    default: {
      return state;
    }
  }
};
