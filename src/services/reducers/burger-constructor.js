import {
  INGREDIENT_CONSTRUCTOR_ADD,
  INGREDIENT_CONSTRUCTOR_DELETE,
} from "../actions/burger-constructor";

const initialState = {
  bun: null,
  filling: [],
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_CONSTRUCTOR_ADD: {
      if (action.payload.type === "bun") {
        return { ...state, bun: action.payload };
    } else
        return {
          ...state,
          filling: [ ...state.filling, action.payload ],
        };
    }
    case INGREDIENT_CONSTRUCTOR_DELETE: {
      return {
        ...state,
        filling: [ ...state.filling ].filter(item => item.id !== action.payload)
      };
    }
    default: {
      return state;
    }
  }
};
