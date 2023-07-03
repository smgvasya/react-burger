import {
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_ERROR,
  ORDER_DETAILS_CLOSE,
} from "../types/constants/order-details";

import { OrderActions } from "../actions/order-details";

type InitialStateType = {
  data: number;
  loaded: boolean;
  error: boolean;
  openModal: boolean;
};

const initialState: InitialStateType = {
  data: 0,
  loaded: false,
  error: false,
  openModal: false,
};

export const orderReducer = (state = initialState, action: OrderActions): InitialStateType => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST: {
      return {
        ...state,
        loaded: true,
        error: false,
      };
    }
    case ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loaded: false,
        error: false,
        openModal: true,
      };
    }
    case ORDER_DETAILS_ERROR: {
      return {
        ...state,
        loaded: false,
        error: true,
      };
    }
    case ORDER_DETAILS_CLOSE: {
      return {
        ...state,
        openModal: false,
      };
    }
    default: {
      return state;
    }
  }
};
