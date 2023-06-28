import {
  WS_CONNECTION_SUCCESS_USER,
  WS_CONNECTION_ERROR_USER,
  WS_CONNECTION_CLOSED_USER,
  WS_GET_MESSAGE_USER,
} from "../types/constants/wsActionsUser";

import { WsActionsUser } from "../actions/wsActionsUser";
import { OrderTypes } from "../types/types";

type InitialStateType = {
  wsConnected: boolean;
  orders: OrderTypes[];
  total: number | null;
  totalToday: number | null;
};

const initialState: InitialStateType = {
  wsConnected: false,
  orders: [],
  total: null,
  totalToday: null,
};

export const wsReducerUser = (state = initialState, action: WsActionsUser) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS_USER:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR_USER:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED_USER:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_GET_MESSAGE_USER:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
};
