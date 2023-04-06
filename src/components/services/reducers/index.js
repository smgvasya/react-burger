import { combineReducers } from 'redux';
import { ingredientReducer } from './burger-ingredients'
import { constructorReducer } from './burger-constructor'
import { ingredientDetailsReducer } from './ingredient-details'
import { orderReducer} from './order-details'

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  constructor: constructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  order: orderReducer,
});
