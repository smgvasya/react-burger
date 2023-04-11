import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../actions/burger-ingredients.js";

const initialState = {
  data: [],
  loaded: false,
  error: null,
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        loaded: true,
        error: null,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loaded: false,
        error: null,
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
