import {
  INGREDIENT_CONSTRUCTOR_ADD,
  INGREDIENT_CONSTRUCTOR_REORDER,
  INGREDIENT_CONSTRUCTOR_DELETE,
} from "../actions/burger-constructor";

const initialState = {
  fillings: [],
  bun: null,
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_CONSTRUCTOR_ADD: {
      if (action.payload.type !== "bun") {
        return { ...state, fillings: [...state.fillings, action.payload] };
      }
      return { ...state, bun: action.payload };
    }

    case INGREDIENT_CONSTRUCTOR_REORDER: {
      const fillings = [...state.fillings];
      fillings.splice(
        action.payload.to,
        0,
        fillings.splice(action.payload.from, 1)[0]
      );
      return {
        ...state,
        fillings,
      };
    }

    case INGREDIENT_CONSTRUCTOR_DELETE: {
      return {
        ...state,
        fillings: [...state.fillings].filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};
