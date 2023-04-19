export const INGREDIENT_DETAILS_OPEN = "INGREDIENT_DETAILS_OPEN";
export const INGREDIENT_DETAILS_CLOSE = "INGREDIENT_DETAILS_CLOSE";

export const detailsOpen = (data) => ({
  type: INGREDIENT_DETAILS_OPEN,
  payload: data,
});

export const detailsClose = () => ({
  type: INGREDIENT_DETAILS_CLOSE,
});
