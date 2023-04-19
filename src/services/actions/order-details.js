import { postOrder } from "../../utils/api";

export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";
export const ORDER_DETAILS_ERROR = "ORDER_DETAILS_ERROR";
export const ORDER_DETAILS_CLOSE = "ORDER_DETAILS_CLOSE";

export const getOrder = (arrayId) => (dispatch) => {
  dispatch(orderRequest());

  postOrder(arrayId)
    .then((res) => dispatch(orderSuccess(res.order.number)))
    .catch(() => dispatch(orderError()));
};

export const orderRequest = () => ({
  type: ORDER_DETAILS_REQUEST,
});

export const orderSuccess = (data) => ({
  type: ORDER_DETAILS_SUCCESS,
  payload: data,
});

export const orderError = () => ({
  type: ORDER_DETAILS_ERROR,
});

export const orderClose = () => ({
  type: ORDER_DETAILS_CLOSE,
});
