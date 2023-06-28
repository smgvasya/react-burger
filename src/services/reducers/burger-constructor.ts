import {
  INGREDIENT_CONSTRUCTOR_ADD,
  INGREDIENT_CONSTRUCTOR_REORDER,
  INGREDIENT_CONSTRUCTOR_DELETE,
  INGREDIENT_CONSTRUCTOR_RESET,
} from "../types/constants/burger-constructor";

import { ConstructorActions } from '../actions/burger-constructor';
import { IngredientTypes } from "../types/types";

type InitialStateType = {
  fillings: IngredientTypes[];
  bun: IngredientTypes | null;
};

const initialState: InitialStateType = {
  fillings: [],
  bun: null,
};

export const constructorReducer = (state = initialState, action: ConstructorActions) => {
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
        fillings: state.fillings.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    case INGREDIENT_CONSTRUCTOR_RESET: {
      return {
        fillings: [],
        bun: null,
      };
    }

    default: {
      return state;
    }
  }
};
