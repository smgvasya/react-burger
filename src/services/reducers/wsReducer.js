import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_GET_MESSAGE_USER,
} from "../actions/wsActions";

const initialState = {
  wsConnected: false,
  orders: [],
  ordersUser: [],
  total: null,
  totalToday: null,
};

export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_GET_MESSAGE_USER:
      return {
        ...state,
        ordersUser: action.payload.ordersUser,
      };

    case WS_GET_MESSAGE:
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

// if (action.serverType === 'orders') {
//   return {
//     ...state,
//     data: action.payload,
//     error: null,
//   };
// } else {
//   return state;
// }

// if (action.serverType === 'user') {
//   return {
//     ...state,
//     data: action.payload,
//     error: null,
//   };
// } else {
//   return state;
// }
