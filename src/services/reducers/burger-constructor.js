import {
  INGREDIENT_CONSTRUCTOR_ADD,
  INGREDIENT_CONSTRUCTOR_REORDER,
  INGREDIENT_CONSTRUCTOR_DELETE,
} from "../actions/burger-constructor";

const initialState = {
  bun: null,
  filling: [],
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_CONSTRUCTOR_ADD:
      return action.payload.type === "bun"
        ? { ...state, bun: action.payload }
        : {
            ...state,
            filling: [...state.filling, action.payload],
          };

    case INGREDIENT_CONSTRUCTOR_REORDER: {
      return {
        ...state,
        filling: action.payload,
      };
    }
    case INGREDIENT_CONSTRUCTOR_DELETE: {
      return {
        ...state,
        filling: [...state.filling].filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};

// case INGREDIENT_CONSTRUCTOR_DELETE: {
//   return {
//     ...state,
//     filling: [
//       ...state.filling.slice(0,action.payload),
//       ...state.filling.slice(action.payload + 1),
//      ]
//   };
// }

// case INGREDIENT_CONSTRUCTOR_RESET: {
//   return initialState
// }
// case INGREDIENT_CONSTRUCTOR_REORDER: {
//   const filling = [...state.filling];
//   filling.splice(
//     action.payload.to,
//     0,
//     filling.splice(action.payload.from, 1)[0]
//   );
//   return {
//     ...state,
//     filling,
//   };
// }
