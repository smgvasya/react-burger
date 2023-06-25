export const INGREDIENT_DETAILS_OPEN = "INGREDIENT_DETAILS_OPEN";
export const INGREDIENT_DETAILS_CLOSE = "INGREDIENT_DETAILS_CLOSE";

// import {
//   INGREDIENT_DETAILS_OPEN,
//   INGREDIENT_DETAILS_CLOSE,
// } from "../constants/ingredient-details";

export const detailsOpen = (data) => ({
  type: INGREDIENT_DETAILS_OPEN,
  payload: data,
});

export const detailsClose = () => ({
  type: INGREDIENT_DETAILS_CLOSE,
});
