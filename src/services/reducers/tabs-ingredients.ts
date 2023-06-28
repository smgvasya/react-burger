import { SET_TAB } from "../types/constants/tabs-ingredients";

import { SetTabAction } from "../actions/tabs-ingredients";

type InitialStateType = {
  currentTab: string;
};

const initialState: InitialStateType = {
  currentTab: "bun",
};

export const tabReducer = (state = initialState, action: SetTabAction) => {
  switch (action.type) {
    case SET_TAB: {
      return {
        currentTab: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
