import { getIngredientsList } from "../../../utils/api";

// export const INCREASE_INGREDIENT = "INCREASE_INGREDIENT";
// export const DECREASE_INGREDIENT = "DECREASE_INGREDIENT";
// export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";

export const getIngredients = () => (dispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQUEST,
  });
  getIngredientsList().then((res) => {
    if (res && res.success) {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_INGREDIENTS_ERROR,
      });
    }
  });
};
