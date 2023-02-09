import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../actions/ingredients.js";

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
    case GET_INGREDIENTS_ERROR: {
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
