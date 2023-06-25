export const SET_TAB = "SET_TAB";
// import { SET_TAB } from "../constants/tabs-ingredients";

export const activeTab = (currentTab) => ({
  type: SET_TAB,
  payload: currentTab,
});
