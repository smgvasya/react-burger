export const SET_TAB = "SET_TAB";

export const activeTab = (currentTab) => ({
  type: SET_TAB,
  payload: currentTab,
});
