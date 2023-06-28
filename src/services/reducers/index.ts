import { combineReducers } from "redux";
import { ingredientReducer } from "./burger-ingredients";
import { constructorReducer } from "./burger-constructor";
import { orderReducer } from "./order-details";
import { tabReducer } from "./tabs-ingredients";
import { authReducer } from "./user";
import { wsReducer } from "./wsReducer";
import { wsReducerUser } from "./wsReducerUser";

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  tab: tabReducer,
  auth: authReducer,
  wsOrders: wsReducer,
  wsOrdersUser: wsReducerUser,
});
