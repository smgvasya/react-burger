import {
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_ERROR,
  ORDER_DETAILS_CLOSE,
} from "../actions/order-details";

const initialState = {
  data: [],
  loaded: false,
  error: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST: {
      return {
        ...state,
        loaded: true,
        error: null,
      };
    }
    case ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loaded: false,
        error: null,
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
      return state;
    }
    default: {
      return state;
    }
  }
};
