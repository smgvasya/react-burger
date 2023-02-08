import { combineReducers } from 'redux';
import {ingredientReducer, tabsReducer} from './ingredients'

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  // tabs: tabsReducer,
});
