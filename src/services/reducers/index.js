import { combineReducers } from "redux";
import { ingredientReducer } from "./burger-ingredients";
import { constructorReducer } from "./burger-constructor";
import { ingredientDetailsReducer } from "./ingredient-details";
import { orderReducer } from "./order-details";
import { tabReducer } from "./tabs-ingredients";
export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  burgerConstructor: constructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  order: orderReducer,
  tab: tabReducer,
});
