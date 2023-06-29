import { postOrder } from "../../utils/api";

import {
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_ERROR,
  ORDER_DETAILS_CLOSE,
} from "../types/constants/order-details";

import { AppDispatch } from "../types/index";

export type OrderDetailsRequest = {
  readonly type: typeof ORDER_DETAILS_REQUEST;
};

export type OrderDetailsSuccess = {
  readonly type: typeof ORDER_DETAILS_SUCCESS;
  readonly payload: number;
};

export type OrderDetailsError = {
  readonly type: typeof ORDER_DETAILS_ERROR;
};

export type OrderDetailsClose = {
  readonly type: typeof ORDER_DETAILS_CLOSE;
};

export type OrderActions =
  | OrderDetailsRequest
  | OrderDetailsSuccess
  | OrderDetailsError
  | OrderDetailsClose;

export const getOrder = (arrayId: object) => (dispatch: AppDispatch) => {
  dispatch(orderRequest());

  postOrder(arrayId)
    .then((res) => dispatch(orderSuccess(res.order.number)))
    .catch(() => dispatch(orderError()));
};

export const orderRequest = (): OrderDetailsRequest => ({
  type: ORDER_DETAILS_REQUEST,
});

export const orderSuccess = (data: number): OrderDetailsSuccess => ({
  type: ORDER_DETAILS_SUCCESS,
  payload: data,
});

export const orderError = (): OrderDetailsError => ({
  type: ORDER_DETAILS_ERROR,
});

export const orderClose = (): OrderDetailsClose => ({
  type: ORDER_DETAILS_CLOSE,
});
