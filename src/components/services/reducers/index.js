import { combineReducers } from 'redux';
import { ingredientReducer } from './ingredients'
import { constructorReducer } from './constructor'
import { ingredientDetailsReducer } from './ingredient-details'

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  constructor: constructorReducer,
  ingredientDetails: ingredientDetailsReducer,
});
