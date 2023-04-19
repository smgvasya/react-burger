import { getIngredientsList } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";

export const getIngredients = () => (dispatch) => {
  dispatch(ingredientRequest());

  getIngredientsList()
    .then((res) => dispatch(ingredientSuccess(res.data)))
    .catch(() => dispatch(ingredientError()));
};

export const ingredientRequest = () => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const ingredientSuccess = (data) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: data,
});

export const ingredientError = () => ({
  type: GET_INGREDIENTS_ERROR,
});
