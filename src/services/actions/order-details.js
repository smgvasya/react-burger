import { postOrder } from "../../utils/api";

export const ORDER_DETAILS_REQUEST = 'ORDER_DETAILS_REQUEST';
export const ORDER_DETAILS_SUCCESS = 'ORDER_DETAILS_SUCCESS';
export const ORDER_DETAILS_ERROR = 'ORDER_DETAILS_ERROR';
export const ORDER_DETAILS_CLOSE = 'ORDER_DETAILS_CLOSE';

export const getOrder = (arrayId) => (dispatch) => {
  dispatch(OrderRequest());

  postOrder(arrayId)
  .then((res) => dispatch(OrderSuccess(res.data)))
  .catch(()=> dispatch(OrderError()))

};

export const OrderRequest = () => ({
  type: ORDER_DETAILS_REQUEST
});

export const OrderSuccess = (data) => ({
  type: ORDER_DETAILS_SUCCESS,
  payload: data
});

export const OrderError = () => ({
  type: ORDER_DETAILS_ERROR
});
