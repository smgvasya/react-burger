import {
  SET_TAB,
} from "../actions/tabs-ingredients";

const initialState = {
  currentTab: '',
};

export const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAB: {
      return {
        currentTab: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
