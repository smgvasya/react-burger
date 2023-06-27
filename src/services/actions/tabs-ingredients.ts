import { SET_TAB } from "../constants/tabs-ingredients";

export type SetTabAction = {
  readonly type: typeof  SET_TAB;
  readonly payload: string;
};

export const activeTab = (currentTab: string): SetTabAction => ({
  type: SET_TAB,
  payload: currentTab,
});
