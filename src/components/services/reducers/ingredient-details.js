import {
  INGREDIENT_DETAILS_OPEN,
  INGREDIENT_DETAILS_CLOSE,
} from "../actions/ingredient-details";

const initialState = {
  data: null,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_DETAILS_OPEN: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case INGREDIENT_DETAILS_CLOSE: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
